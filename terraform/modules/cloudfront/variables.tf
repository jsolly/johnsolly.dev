variable "bucket_domain_name" {
  type        = string
  description = "The domain name of the S3 bucket"
}

variable "bucket_id" {
  type        = string
  description = "The ID of the S3 bucket"
}

variable "certificate_arn" {
  type        = string
  description = "The ARN of the ACM certificate"
} 
