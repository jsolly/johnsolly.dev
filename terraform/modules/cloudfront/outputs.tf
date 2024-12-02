output "distribution_arn" {
  value = aws_cloudfront_distribution.hack_my_career_distribution.arn
}

output "domain_name" {
  value = aws_cloudfront_distribution.hack_my_career_distribution.domain_name
}

output "hosted_zone_id" {
  value = aws_cloudfront_distribution.hack_my_career_distribution.hosted_zone_id
}
