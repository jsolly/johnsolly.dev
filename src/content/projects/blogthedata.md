---
title: "Blogthedata.com: A blogging platform with everything but the kitchen sink."
metaimg: "/src/images/projects/iPhoneblogthedata.webp"
metaimgAlt: "Blogthedata.com on an iPhone"
metaimgWidth: 480
metaimgHeight: 320
snippet: "Blogthedata.com is a blogging platform with everything but the kitchen sink. It is a full-stack web application that I built from scratch using the Django web framework and a variety of other technologies."
logos:
  - url: /src/images/logos/linodeLogo.svg
    alt: "Linode logo"
  - url: /src/images/logos/pythonLogo.svg
    alt: "Python logo"
  - url: /src/images/logos/djangoLogo.svg
    alt: "Django logo"
  - url: /src/images/logos/postgresLogo.svg
    alt: "Postgres logo"
  - url: /src/images/logos/NGINXlogo.svg
    alt: "NGINX logo"
  - url: /src/images/logos/gunicornLogo.svg
    alt: "Gunicorn logo"
  - url: /src/images/logos/cloudflareLogo.svg
    alt: "Cloudflare logo"
---

## Purpose and Goal

They say publishing your work is one of the best ways to increase your luck. I love sharing things I've learned, so a technical blog perfectly combines the two. I want this site to be more than a portfolio. I want to help others get into geospatial web development by following my tutorials and cloning my repositories to learn.

## Spotlight Mozilla Observatory score of A+ for blogthedata.com

A blog might seem simple, but I've done a considerable amount of work under the hood. Whether that's [getting an A+ on Mozilla's observatory tool](https://blogthedata.com/post/how-to-get-a-perfect-mozilla-observatory-score/), achieving a [perfect score on Google Lighthouse](https://blogthedata.com/post/google-lighthouse-perfect-score/), having [100% unit test coverage](https://blogthedata.com/post/how-to-get-100-percent-unit-test-coverage/), or even implementing a complete [CI/CD pipeline with Github Actions](https://blogthedata.com/post/implement-continuous-integration-github-actions/).

## Tech Stack Explanation

I have the most experience with Python, so I decided to use Django mainly because I could do both the front and backend without messing with JavaScript. I wanted to learn more about server configuration, so I set everything up on an Ubuntu box hosted by Linode and used an Apache web server. This meant I had to handle all the security, firewall rules, and SSL, but it was a good learning experience. At one point, I decided I wanted to explore more modern tools, so I [migrated from Apache to NGINX + Gunicorn](https://blogthedata.com/post/Migrating-from-apache-to-Nginx-Gunicorn/).

## Lessons Learned

I'd like to implement [this issue](https://github.com/jsolly/blogthedata/issues/137) and move the site to a PaaS solution like Heroku. Learning all the ins and outs of deploying an application was fun, but these providers abstract all that away so I can focus all my effort on things that actually bring real value to my application.

I also want to be much more careful about relationships between objects/tables. I neglected to make a foreign/primary key relationship between posts and categories, forcing me to go through a [complex database migration](https://blogthedata.com/post/UI-enhancement-leads-to-major-architecture-changes/) to add it later. 

One of the trickiest changes was [migrating from SQLite to Postgres](https://blogthedata.com/post/migrating-to-postgres-from-sqllite/). I made a [Youtube video](https://www.youtube.com/watch?v=Y2g5nUnZpNc&t=3s) about all the issues I had to resolve.

Another significant change was migrating from [ckeditor4 to ckeditor5](https://blogthedata.com/post/migrating-to-ckeditor-5/). At the time, the ckeditor5 integration for Django was brand new, and I logged ten issues in the [ckeditor5 repo](https://github.com/hvlads/django-ckeditor-5/issues?q=is%3Aissue+is%3Aclosed+author%3Ajsolly) (as of 7/31/22). I even [fixed one of them myself](https://github.com/hvlads/django-ckeditor-5/pull/71) and became an official contributor to django-ckeditor5. It was enjoyable to collaborate with another developer to improve a package used by hundreds of people.

I also implemented some features that I removed because they didn't make sense. For example, I allowed users to log in and comment on posts, but I pulled [this functionality](https://github.com/jsolly/blogthedata/pull/77) because I decided it wasn't worth my extra effort to moderate content. I also [implemented a honeypot page](https://blogthedata.com/post/admin-honeypot-page-to-catch-hackers/) but needed to remove it because it was incompatible with Django 4.0, and it appeared that the package maintainer was no longer updating it. After adding the site to a CDN, I found that the way I was tracking post views was no longer accurate because users were no longer hitting my server but instead got cached copies of my site from the CDN edge servers. 

## Future Plans

While I always respond to open-source contributions, I see my blog as a relatively mature project. I don't have any plans to add new features, but I will continu to add blog posts and patch any security issues that crop up. 