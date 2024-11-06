variable "bucket_arn" {
  type     = string
  nullable = false
}

variable "cloudfront_distribution_arn" {
  type     = string
  nullable = false
}

variable "bucket_id" {
  type     = string
  nullable = false
}

variable "oai_iam_arn" {
  type     = string
  nullable = false
}