data "aws_s3_bucket" "selected_bucket" {
  bucket = var.s3_bucket_id
}

resource "aws_cloudfront_origin_access_identity" "oai" {
  comment = "OAI pour accéder au bucket S3 depuis CloudFront"
}

####################################################
# Create AWS Cloudfront distribution
####################################################
resource "aws_cloudfront_origin_access_control" "cf-s3-oac" {
  name                              = "CloudFront S3 OAC"
  description                       = "CloudFront S3 OAC"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "cf-dist" {
  enabled             = true
  default_root_object = "index.html"

  aliases = ["tomsiouan.fr", "www.tomsiouan.fr"]

  custom_error_response {
    error_caching_min_ttl = 10
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
  }

  origin {
    domain_name              = data.aws_s3_bucket.selected_bucket.bucket_regional_domain_name
    origin_id                = var.s3_bucket_id
    origin_access_control_id = aws_cloudfront_origin_access_control.cf-s3-oac.id
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = var.s3_bucket_id
    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  price_class = "PriceClass_All"

  restrictions {
    geo_restriction {
      restriction_type = "none" # Select none, whitelist or blacklist.
      locations        = []
    }
  }

  viewer_certificate {
    acm_certificate_arn       = aws_acm_certificate_validation.await_cert_validation.certificate_arn
    ssl_support_method        = "sni-only"
    minimum_protocol_version  = "TLSv1.2_2021"
  }

  tags = {
    Name = "portfolio-cloudfront"
  }
}

resource "aws_acm_certificate" "cert" {
  provider                  = aws.us_east_1
  domain_name               = "tomsiouan.fr"
  validation_method         = "DNS"

  subject_alternative_names = ["www.tomsiouan.fr"]

  lifecycle {
    create_before_destroy = true
  }
}

# Register keys provided by AWS so that AWS accepts entries from DNS.
resource "ovh_domain_zone_record" "record" {
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      target = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }
  
  zone      = "tomsiouan.fr"
  subdomain = each.value.name
  fieldtype = each.value.type
  ttl       = 3600
  target    = each.value.target
}

resource "aws_acm_certificate_validation" "await_cert_validation" {
  provider                = aws.us_east_1
  certificate_arn         = aws_acm_certificate.cert.arn
}

# Add the cloudfront domain_name in OVH
resource "ovh_domain_zone_record" "redirect_ovh_dns_to_cloudfront_dns" {
  zone      = "tomsiouan.fr"
  subdomain = "www"
  fieldtype = "CNAME"
  ttl       = 60
  target    = "${aws_cloudfront_distribution.cf-dist.domain_name}."
}