resource "aws_cloudfront_origin_access_identity" "oai" {
  comment = "OAI for hack-my-career CloudFront Distribution"
}

resource "aws_cloudfront_function" "append_index_to_directories" {
  name    = "AppendIndexToDirectories"
  runtime = "cloudfront-js-2.0"
  comment = "Appends /index.html to directories"

  code = <<EOT
function handler(event) {
    var request = event.request;
    var uri = request.uri;

    if (uri === '/sitemap.xml') {
        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: {
                'location': { value: '/sitemap-index.xml' }
            }
        };
    }
    if (uri === '/sitemap_index.xml') {
        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: {
                'location': { value: '/sitemap-0.xml' }
            }
        };
    }

    if (uri.endsWith('/')) {
        request.uri += 'index.html';
    } else if (!uri.includes('.')) {
        request.uri += '/index.html';
    }

    return request;
}
EOT
}

resource "aws_cloudfront_distribution" "hack_my_career_distribution" {

  origin {
    domain_name = var.bucket_domain_name
    origin_id   = "S3-${var.bucket_id}"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.oai.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

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
