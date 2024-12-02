resource "aws_route53_zone" "hack_my_career_zone" {
  name = "hackmycareer.lol"
}

# A record for apex domain pointing to CloudFront
resource "aws_route53_record" "apex_a" {
  zone_id = aws_route53_zone.hack_my_career_zone.zone_id
  name    = "hackmycareer.lol"
  type    = "A"

  alias {
    name                   = var.cloudfront_domain_name
    zone_id                = var.cloudfront_hosted_zone_id
    evaluate_target_health = false
  }
}

# AAAA record for apex domain pointing to CloudFront
resource "aws_route53_record" "apex_aaaa" {
  zone_id = aws_route53_zone.hack_my_career_zone.zone_id
  name    = "hackmycareer.lol"
  type    = "AAAA"

  alias {
    name                   = var.cloudfront_domain_name
    zone_id                = var.cloudfront_hosted_zone_id
    evaluate_target_health = false
  }
}

# NS records
resource "aws_route53_record" "ns" {
  zone_id = aws_route53_zone.hack_my_career_zone.zone_id
  name    = "hackmycareer.lol"
  type    = "NS"
  ttl     = 172800

  records = aws_route53_zone.hack_my_career_zone.name_servers
}

# SOA record
resource "aws_route53_record" "soa" {
  zone_id = aws_route53_zone.hack_my_career_zone.zone_id
  name    = "hackmycareer.lol"
  type    = "SOA"
  ttl     = 900

  records = [
    "${aws_route53_zone.hack_my_career_zone.name_servers[0]}. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400"
  ]
}

# TXT record for Google site verification
# resource "aws_route53_record" "txt" {
#   zone_id = aws_route53_zone.hack_my_career_zone.zone_id
#   name    = "hackmycareer.lol"
#   type    = "TXT"
#   ttl     = 300

#   records = [
#     "google-site-verification=YOUR_VERIFICATION_CODE" # Replace with your actual verification code
#   ]
# }

# WWW records pointing to CloudFront
resource "aws_route53_record" "www_a" {
  zone_id = aws_route53_zone.hack_my_career_zone.zone_id
  name    = "www.hackmycareer.lol"
  type    = "A"

  alias {
    name                   = var.cloudfront_domain_name
    zone_id                = var.cloudfront_hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_aaaa" {
  zone_id = aws_route53_zone.hack_my_career_zone.zone_id
  name    = "www.hackmycareer.lol"
  type    = "AAAA"

  alias {
    name                   = var.cloudfront_domain_name
    zone_id                = var.cloudfront_hosted_zone_id
    evaluate_target_health = false
  }
}
