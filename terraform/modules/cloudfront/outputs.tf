output "distribution_arn" {
  value = aws_cloudfront_distribution.distribution.arn
}

output "domain_name" {
  value = aws_cloudfront_distribution.distribution.domain_name
}

output "hosted_zone_id" {
  value = aws_cloudfront_distribution.distribution.hosted_zone_id
}

output "oai_canonical_user_id" {
  value = aws_cloudfront_origin_access_identity.oai.s3_canonical_user_id
}

