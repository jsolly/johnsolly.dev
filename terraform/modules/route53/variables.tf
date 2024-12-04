variable "domain_name" {
  description = "The domain name for the website"
  type        = string
}

variable "cloudfront_hosted_zone_id" {
  description = "The CloudFront distribution hosted zone ID"
  type        = string
}
variable "bucket_name" {
  description = "The name of the S3 bucket"
  type        = string
}

variable "cloudfront_domain_name" {
  type        = string
  description = "The domain name of the CloudFront distribution"
}

