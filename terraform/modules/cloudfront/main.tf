resource "aws_cloudfront_origin_access_control" "oac" {
  name                              = "OAC for CloudFront Distribution"
  description                       = "Origin Access Control for S3"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_function" "append_index_to_directories" {
  name    = "AppendIndexToDirectories"
  runtime = "cloudfront-js-2.0"
  comment = "Appends /index.html to directories"
  code    = file("${path.module}/functions/append-index.js")
}

resource "aws_cloudfront_distribution" "distribution" {
  origin {
    domain_name              = var.bucket_domain_name
    origin_id                = "S3-${var.bucket_id}"
    origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
  }

  enabled             = true
  is_ipv6_enabled     = true
  http_version        = "http2and3"
  default_root_object = "index.html"

  custom_error_response {
    error_code         = 404
    response_code      = 404
    response_page_path = "/404.html"
  }

  custom_error_response {
    error_code         = 500
    response_code      = 500
    response_page_path = "/500.html"
  }

  default_cache_behavior {
    cache_policy_id  = "658327ea-f89d-4fab-a63d-7e88639e58f6" # Managed-CachingOptimized
    target_origin_id = "S3-${var.bucket_id}"

    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.append_index_to_directories.arn
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  aliases = var.domain_names

  viewer_certificate {
    acm_certificate_arn      = var.certificate_arn
    minimum_protocol_version = "TLSv1.2_2021"
    ssl_support_method       = "sni-only"
  }
}
