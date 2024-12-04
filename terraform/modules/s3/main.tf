resource "aws_s3_bucket" "website_bucket" {
  bucket        = var.bucket_name
  force_destroy = true
}

resource "aws_s3_bucket_policy" "hack_my_career_policy" {
  bucket = aws_s3_bucket.website_bucket.id

  policy = jsonencode({
    Version = "2008-10-17",
    Id      = "PolicyForCloudFrontPrivateContent",
    Statement = [
      {
        Sid       = "AllowCloudFrontServicePrincipal",
        Effect    = "Allow",
        Principal = { Service = "cloudfront.amazonaws.com" },
        Action    = ["s3:GetObject", "s3:ListBucket"],
        Resource = [
          "arn:aws:s3:::${var.bucket_name}",
          "arn:aws:s3:::${var.bucket_name}/*"
        ],
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = var.distribution_arn
          }
        }
      },
      {
        Sid       = "AllowPublicReadAccessToCertainStaticFiles",
        Effect    = "Allow",
        Principal = "*",
        Action    = "s3:GetObject",
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
