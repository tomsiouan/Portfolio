
output "domain_name" {
  value = "http://${module.cloudfront.domain_name}"
}

output "dns" {
  value = "http://www.tomsiouan.fr"
}