
output "domain_name" {
  value = "http://${module.cloudfront.domain_name}"
}

output "dns" {
  value = "http://www.tomsiouan.fr"
}

output "distribution_id" {
  value = module.cloudfront.aws_cloudfront_distribution.id
}