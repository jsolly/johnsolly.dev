---
title: "JohnSolly.dev, a personal portfolio website"
metaimg: "/src/images/projects/JohnSollyDevWebsite.webp"
metaimgAlt: "JohnSolly.dev project screenshot"
metaimgWidth: 400
metaimgHeight: 311
snippet: "Learn more about the website you are currently on! This project was built with Astro, Vue.js, and is hosted on AWS"
logos:
  - url: /src/images/logos/awsLogo.svg
    alt: "AWS logo"
  - url: /src/images/logos/typescriptLogo.svg
    alt: "TypeScript logo"
  - url: /src/images/logos/astroLogo.svg
    alt: "Astro logo"
  - url: /src/images/logos/vueLogo.svg
    alt: "Vue.js logo"
  - url: /src/images/logos/tailwindLogo.svg
    alt: "Tailwind CSS logo"
  - url: /src/images/logos/stripeLogo.svg
    alt: "Stripe logo"
  
---

## Purpose and Objective
Initially, my professional portfolio was nested within [blogthedata.com](https://blogthedata.com), a personal blog I have maintained for several years. Having my portfolio/resume share the same domain as my blog always felt awkward.

The inception of JohnSolly.dev was driven by my desire to create a dedicated space for my professional portfolio, resume, and consulting services. I also sought an excuse to experiment with Astro.js, a technology that blends static site generation with client-side 'interactive islands.'

## Highlights
JohnSolly.dev has some exciting features. I connected it to Stripe and Cal.com so anyone can pay for and book me for consulting services.

## Tech Stack
I had heard good things about Astro.js for crafting static sites with dynamic, interactive 'islands.' Its unique approach to blending static site generation with client-side interactivity quickly won me over. It feels like Astro is a backend framework without all the overhead.

I also used this site to learn more about Amazon's offerings, mainly as I work towards my AWS Solutions Architect certification. I initially deployed to AWS Amplify but have since migrated to S3, Cloudfront, and Route 53. I also used AWS Certificate Manager to manage my SSL certificate.

## Overcoming Obstacles
Migrating the portfolio content from my blog to this site was relatively straightforward, yet the project was not without its hurdles. Adapting Django's server-side templates to Astro.js's methodology required intelligent thought to preserve functionality while doing things the 'Astro way.' I came across an interesting quirk where the testimonial carousel indicators went out of sync with the currently selected option. .astro files contain NO client-side state, so I needed to move some of the logic that was in the template to the client-side JavaScript.

## Looking Ahead
Now that I've deployed to S3 and Cloudfront with Route 53 routing and DNS, I'd like to make the deployment more repeatable with Cloudformation and/or Terraform.