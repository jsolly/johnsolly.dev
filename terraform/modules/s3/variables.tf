variable "bucket_name" {
  description = "Name of the S3 bucket to create"
  type        = string
}

variable "cloudfront_distribution_arn" {
  description = "The ARN of the CloudFront distribution"
  type        = string
}
