variable "bucket_domain_name" {
  type        = string
  description = "The domain name of the S3 bucket"
}

variable "bucket_id" {
  type        = string
  description = "The ID of the S3 bucket"
}

variable "certificate_arn" {
  description = "ARN of the manually created ACM certificate"
  type        = string
}

variable "domain_names" {
  description = "Domain names for the CloudFront distribution aliases"
  type        = list(string)
}
