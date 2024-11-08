terraform {
  required_providers {
    ovh = {
      source = "ovh/ovh"
    }
  }
  backend "s3" {
    bucket = "terraform-states-6i62lv8r"
    key    = "website"
    region = "eu-central-1"
  }
}

provider "aws" {
  region = "eu-west-3"
}

provider "ovh" {
  endpoint           = "ovh-eu"
  application_key    = var.ovh_access_key
  application_secret = var.ovh_application_secret
  consumer_key       = var.ovh_consumer_key
}
