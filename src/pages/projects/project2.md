---
layout: /src/layouts/MarkdownProjectLayout.astro
title: "Atari Astroids Clone, with a Geospatial Twist!"
href: /projects/project2
metaimg: 
  url: /src/images/projects/GeoAsteroids_screenshot.webp
  alt_txt: "GeoAsteroids Screenshot"
snippet: "Asteroids was one of my favorite arcade games growing up. I wanted to recreate that nostalgic experience while leveling up my web development skills. I was excited to build a game because I knew it would be a great way to learn many aspects of programming - state management, collision detection, animations, etc."
logos:
  - url: /src/images/logos/typescriptLogo.svg
    alt_txt: "TypeScript logo"
  - url: /src/images/logos/mongoLogo.svg
    alt_txt: "MongoDB logo"
  - url: /src/images/logos/vercelLogo.svg
    alt_txt: "Vercel logo"
  - url: /src/images/logos/viteLogo.svg
    alt_txt: "Vite logo"

---

## Purpose and Goal

Asteroids was one of my favorite arcade games growing up. I wanted to recreate that nostalgic experience while leveling up my web development skills. I was excited to build a game because I knew it would be a great way to learn many aspects of programming - state management, collision detection, animations, etc.

## Spotlight 

I started by following a [YouTube Tutorial](https://www.youtube.com/watch?v=H9CSWMxJx84&t=2s) to get the basic gameplay working. This initial version was not very maintainable, with all 700 lines of code crammed into a [single &lt;script&gt; tag within an HTML page](https://www.youtube.com/watch?v=H9CSWMxJx84). I embarked on a major refactor from that tutorial, splitting the code into modules and converting the vanilla JS to TypeScript. This significantly improved the structure and maintainability of the code base. From there, I just started adding features like procedurally generated asteroids, a global scoreboard, and more!

## Tech Stack Explanation

I avoided frameworks to keep things simple since most of the logic lies in the HTML5 canvas. I firmly believe that complexity should only be introduced when absolutely necessary.

For example, when I started GeoAsteroids, the scoring was done client-side in the browser. It was only when I wanted to [implement a global high scoreboard](https://github.com/jsolly/GeoAsteroids/issues/161) that I started using a database. I chose MongoDB because high scores are essentially a flat JSON file, and a NoSQL database is a perfect fit. If my application had needed to perform a lot of joins, I might have opted for something like Postgres.

To communicate with MongoDB, I chose to use Vercel serverless functions. I think this is a good choice because the only time I am querying the database is when users visit the high score board or submit a new high score. Both of these actions happen infrequently, so they are a perfect fit for a serverless function.

## Lessons Learned

Working on this project taught me a lot about managing states across frames and preventing unintended side effects. In a videogame, you must keep track of what is animating in each frame and which pieces of code are mutating game objects. Initially, I ran into countless issues where objects were being changed unexpectedly. One of the ways I mitigated that issue was by using getters and setters on each object. This way, there was only 'one way' to modify the objects.

Another thing that is now ingrained in me is the importance of testing and typing. Now that my application has over 80% code coverage, I can perform refactorings efficiently, knowing which functions are being broken without ever having to run the server to iterate for bugs. It also has helped lessen the cognitive load when developing new features because the types guide me as I write new code.

<video controls="" autoplay="">
  <source src="/src/videos/GeoAsteroids-playthrough.mp4" type="video/mp4">
</video>