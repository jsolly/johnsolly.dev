resource "aws_s3_bucket" "website_bucket" {
  bucket        = var.bucket_name
  force_destroy = true
}

resource "aws_s3_bucket_public_access_block" "website_bucket" {
  bucket = aws_s3_bucket.website_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "website_policy" {
  bucket = aws_s3_bucket.website_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowCloudFrontServicePrincipalReadAccess"
        Effect = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action = ["s3:GetObject", "s3:ListBucket"]
        Resource = [
          "arn:aws:s3:::${var.bucket_name}",
          "arn:aws:s3:::${var.bucket_name}/*"
        ]
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = var.cloudfront_distribution_arn
          }
        }
      },
      {
        Sid       = "AllowPublicReadAccessToCertainStaticFiles"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource = [
          "arn:aws:s3:::${var.bucket_name}/sitemap-index.xml",
          "arn:aws:s3:::${var.bucket_name}/sitemap-0.xml",
          "arn:aws:s3:::${var.bucket_name}/robots.txt",
          "arn:aws:s3:::${var.bucket_name}/favicon.ico",
          "arn:aws:s3:::${var.bucket_name}/favicons/*",
          "arn:aws:s3:::${var.bucket_name}/404.html"
        ]
      }
    ]
  })
}
