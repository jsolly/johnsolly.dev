variable "bucket_name" {
  description = "Name of the S3 bucket to create"
  type        = string
}

variable "cloudfront_oai_canonical_user_id" {
  type        = string
  description = "The canonical user ID of the CloudFront Origin Access Identity"
}
