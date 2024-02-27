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
JohnSolly.dev has some exciting features. I connected it to Stripe and Cal.com so anyone can pay for and book me for consulting services. You'll also notice that my [resume page](/resume) is just a single markdown file with some added CSS. This is an excellent example of how Astro.js can create a dynamic, interactive page with minimal effort.

## Overcoming Obstacles
Migrating the portfolio content from my blog to this site was relatively straightforward, yet the project was not without its hurdles. Adapting Django's server-side templates to Astro.js's methodology required intelligent thought to preserve functionality while also doing things the 'Astro way.' I came across an interesting quirk where the testimonial carousel indicators went out of sync with the currently selected option. This was because .astro files contain NO client-side state. This limitation prompted me to leverage my Vue.js expertise, creating a dynamic Vue component encapsulated within an Astro island.

## Tech Stack
I had heard good things about Astro.js for crafting static sites with dynamic, interactive 'islands.' Its unique approach to blending static site generation with client-side interactivity quickly won me over. It feels like Astro is a backend framework without all the overhead.

I also used this site to learn more about Amazon's offerings, mainly as I work towards my AWS Solutions Architect certification. Initially deploying via AWS Amplify, I am transitioning to a more robust setup using AWS S3 and CloudFront.

## Looking Ahead
I am eager to address several [pending tasks](https://github.com/jsolly/johnsolly.dev/issues) in this project's repo in the coming weeks. I want to use more Amazon services, such as S3, Lambda, CloudFront, and Route 53, to host the website.