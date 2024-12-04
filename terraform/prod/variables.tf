variable "certificate_arn" {
  description = "ARN of the manually created ACM certificate"
  type        = string
}

variable "domain_name" {
  description = "Primary domain name (e.g., hackmycareer.lol)"
  type        = string
}

variable "bucket_name" {
  description = "Name of the S3 bucket to create"
  type        = string
}

variable "aws_account_id" {
  description = "AWS Account ID for the General Account"
  type        = string
}

variable "cloudfront_distribution_arn" {
  description = "ARN of the manually created CloudFront distribution"
  type        = string
}

variable "cloudfront_hosted_zone_id" {
  description = "Hosted zone ID of the manually created CloudFront distribution"
  type        = string
}
