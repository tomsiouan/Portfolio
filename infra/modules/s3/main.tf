resource "random_string" "suffix" {
  length  = 8
  special = false
  upper = false
}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.portfolio_bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = ["${var.oai_iam_arn}"]
    }
  }

  statement {
    actions   = ["s3:ListBucket"]
    resources = ["${aws_s3_bucket.portfolio_bucket.arn}"]

    principals {
      type        = "AWS"
      identifiers = ["${var.oai_iam_arn}"]
    }
  }
}

resource "aws_s3_bucket" "portfolio_bucket" {
  bucket = "portfolio-bucket-${random_string.suffix.result}"

  tags = {
    Name = "portfolio-s3-bucket"
  }
}

resource "aws_s3_bucket_policy" "allow_access_from_another_account" {
  bucket = aws_s3_bucket.portfolio_bucket.id
  policy = data.aws_iam_policy_document.s3_policy.json
}

# Configurer le blocage d'accès public séparément
resource "aws_s3_bucket_public_access_block" "portfolio_bucket_access_block" {
  bucket = aws_s3_bucket.portfolio_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = true
  restrict_public_buckets = false
}

resource "aws_s3_bucket_website_configuration" "portfolio_bucket_website" {
  bucket = aws_s3_bucket.portfolio_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "200.html"
  }
}

locals {
  content_type_map = {
    "js"    = "application/javascript"
    "html"  = "text/html"
    "css"   = "text/css"
    "ico"   = "image/x-icon"
    "png"   = "image/png"
    "jpeg"  = "image/jpeg"
    "jpg"   = "image/jpeg"
    "json"  = "application/json"
    "mjs"   = "text/javascript"
    "ttf"   = "font/ttf"
    "woff"  = "font/woff"
    "woff2" = "font/woff2"
    "m3u8"  = "application/vnd.apple.mpegurl"
  }
}

####################################################
# Upload files to S3 Bucket 
####################################################
resource "aws_s3_object" "provision_source_files" {
  bucket = aws_s3_bucket.portfolio_bucket.id

  for_each = fileset("${path.module}/../../../website/.output/public/", "**/**")

  key          = each.value
  source       = "${path.module}/../../../website/.output/public/${each.value}"
  etag         = filemd5("${path.module}/../../../website/.output/public/${each.value}")

  content_type = lookup(
    local.content_type_map, 
    split(".", basename("${path.module}/../../../website/.output/public/${each.value}"))[length(split(".", basename("${path.module}/../../../website/.output/public/${each.value}"))) - 1], 
    "application/octet-stream"
  )

  provisioner "local-exec" {
    when    = create
    command = "echo 'Starting to fetch datas on bucket s3.'"
  }
}

