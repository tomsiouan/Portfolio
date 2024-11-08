
module "s3" {
  source      = "./modules/s3"
  oai_iam_arn = module.cloudfront.oai_iam_arn
}

module "cloudfront" {
  source       = "./modules/cloudfront"
  s3_bucket_id = module.s3.s3_bucket_id
}

module "iam" {
  source                      = "./modules/iam"
  oai_iam_arn                 = module.cloudfront.oai_iam_arn
  bucket_id                   = module.s3.s3_bucket_id
  bucket_arn                  = module.s3.s3_bucket_arn
  cloudfront_distribution_arn = module.cloudfront.aws_cloudfront_distribution.arn
}