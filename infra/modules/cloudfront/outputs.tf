
output "aws_cloudfront_distribution_arn" {
  value = aws_cloudfront_distribution.cf-dist.arn
}

output "domain_name" {
  value = aws_cloudfront_distribution.cf-dist.domain_name
}

output "oai_iam_arn" {
  value = aws_cloudfront_origin_access_identity.oai.iam_arn
}