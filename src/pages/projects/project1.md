---
layout: ../../layouts/MarkdownProjectLayout.astro
title: "Blogthedata.com: A blogging platform with everything but the kitchen sink."
href: "/projects/project1"
metaimg: 
  url: "/images/projects/iPhoneblogthedata.webp"
  alt_txt: "Blogthedata.com on an iPhone"
snippet: "Blogthedata.com is a blogging platform with everything but the kitchen sink. It is a full-stack web application that I built from scratch using the Django web framework and a variety of other technologies."
---

## Purpose and Goal

They say publishing your work is one of the best ways to increase your luck. I love sharing things I've learned, so a technical blog seemed like a perfect way to combine the two. I want this site to be more than a portfolio. I hope to help others get into geospatial web development by following my tutorials and cloning my repositories to learn.

## Spotlight Mozilla Observatory score of A+ for blogthedata.com

A blog might seem simple, but I've done a considerable amount of work under the hood. Whether that's getting an A+ on Mozilla's observatory tool, achieving a perfect score on Google Lighthouse, having 100% unit test coverage, or even implementing a complete CI/CD pipeline with Github Actions.

## Tech Stack Explanation

I have the most experience with Python, so I decided to use Django mainly because I could do both the front and backend without messing with JavaScript. I wanted to learn more about server configuration, so I set everything up on an Ubuntu box hosted by Linode and used an Apache web server. This meant I had to handle all the security, firewall rules, and SSL, but it was a good learning experience. At one point, I decided I wanted to explore more modern tools, so I migrated from Apache to NGINX + Gunicorn.

## Lessons Learned

I'd like to implement this issue and move the site to a PaaS solution like Heroku. Learning all the ins and outs of deploying an application was fun, but these providers abstract all that away so I can focus all my effort on things that actually bring real value to my application.

I also want to be much more careful about relationships between objects/tables. I neglected to make a foreign/primary key relationship between posts and categories, forcing me to go through a complex database migration to add it later. 

One of the trickiest changes was migrating from SQLite to Postgres. I made a Youtube video about all the issues I had to resolve.

Another significant change was migrating from ckeditor4 to ckeditor5. At the time, the ckeditor5 integration for Django was brand new, and I logged ten issues in the ckeditor5 repo (as of 7/31/22). I even fixed one of them myself and became an official contributor to django-ckeditor5. It was enjoyable to collaborate with another developer to improve a package used by hundreds of people.

I also implemented some features that I removed because they didn't make sense. For example, I allowed users to log in and comment on posts, but I pulled this functionality because I decided it wasn't worth my extra effort to moderate content. I also implemented a honeypot page but needed to remove it because it was incompatible with Django 4.0, and it appeared that the package maintainer was no longer updating it. After adding the site to a CDN, I found that the way I was tracking post views was no longer accurate because users were no longer hitting my server but instead got cached copies of my site from the CDN edge servers. 

