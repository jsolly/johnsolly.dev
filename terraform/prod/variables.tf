variable "certificate_arn" {
  description = "ARN of the manually created ACM certificate"
  type        = string
}

variable "domain_name" {
  description = "Primary domain name (e.g., example.com)"
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
