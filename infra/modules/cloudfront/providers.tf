terraform {
  required_providers {
    ovh = {
      source  = "ovh/ovh"
      version = "1.0.0"
    }
    aws = {
      source  = "hashicorp/aws"
      version = "5.73.0"
    }
  }
}


provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}