terraform {
  backend "s3" {
    bucket         = "jsolly-general-tf-state"
    key            = "prod/hackmycareer/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-state-locking"

    assume_role = {
      role_arn = "arn:aws:iam::541310242108:role/TerraformStateBucketAccess" # Role in the General Account
    }
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region  = "us-east-1"
  profile = "prod-admin"
}

provider "aws" {
  alias   = "us_east_1"
  region  = "us-east-1"
  profile = "prod-admin"
}

module "s3" {
  source           = "../modules/s3"
  distribution_arn = module.cloudfront.distribution_arn
}

module "cloudfront" {
  source                     = "../modules/cloudfront"
  bucket_domain_name         = module.s3.bucket_domain_name
  bucket_id                  = module.s3.bucket_id
  certificate_arn            = module.acm.certificate_arn
  certificate_validation_arn = module.acm.certificate_validation_arn
}

module "acm" {
  source = "../modules/acm"
  providers = {
    aws.us_east_1 = aws.us_east_1
  }
  domain_name               = "hackmycareer.lol"
  subject_alternative_names = ["www.hackmycareer.lol"]
  zone_id                   = module.route53.zone_id
}

module "route53" {
  source                    = "../modules/route53"
  cloudfront_domain_name    = module.cloudfront.domain_name
  cloudfront_hosted_zone_id = module.cloudfront.hosted_zone_id
}
