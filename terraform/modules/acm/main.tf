resource "aws_acm_certificate" "hack_my_career_cert" {
  domain_name       = "hackmycareer.lol"
  validation_method = "DNS"

  subject_alternative_names = ["www.hackmycareer.lol"]

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Name = "hackmycareer-lol-cert"
  }
}

resource "aws_route53_record" "hack_my_career_validation" {
  for_each = {
    for dvo in aws_acm_certificate.hack_my_career_cert.domain_validation_options :
    dvo.domain_name => dvo
  }

  zone_id = var.zone_id
  name    = each.value.resource_record_name
  type    = each.value.resource_record_type
  records = [each.value.resource_record_value]
  ttl     = 60
} 
