
output "s3_bucket_id" {
  value = aws_s3_bucket.portfolio_bucket.id
}

output "s3_bucket_arn" {
  value = aws_s3_bucket.portfolio_bucket.arn
}