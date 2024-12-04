variable "distribution_arn" {
  type        = string
  description = "The ARN of the CloudFront distribution"
}

variable "bucket_name" {
  description = "Name of the S3 bucket to create"
  type        = string
}
