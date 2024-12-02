resource "aws_s3_bucket" "hack_my_career_bucket" {
  bucket        = "hack-my-career"
  force_destroy = true
}

resource "aws_s3_bucket_policy" "hack_my_career_policy" {
  bucket = aws_s3_bucket.hack_my_career_bucket.id

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
          "arn:aws:s3:::hack-my-career",
          "arn:aws:s3:::hack-my-career/*"
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
          "arn:aws:s3:::hack-my-career/sitemap-index.xml",
          "arn:aws:s3:::hack-my-career/sitemap-0.xml",
          "arn:aws:s3:::hack-my-career/robots.txt",
          "arn:aws:s3:::hack-my-career/favicon.ico",
          "arn:aws:s3:::hack-my-career/favicons/*",
          "arn:aws:s3:::hack-my-career/404.html"
        ]
      }
    ]
  })
} 
