---
title: Jamstack Frameworks

description: Introduce the history of static hosting and web development practices and go on to compare modern Jamstack frameworks starting with Jekyll/Hugo, Gatsby/Gridsome, and Eleventy/Astro

layout: ../../layouts/MainLayout.astro
---

## Overview

Jamstack frameworks are a collection of tools that allow you to build a static website. They are a combination of a static site generator, a bundler, and a deployment tool. The static site generator is responsible for taking your content and transforming it into HTML. The bundler is responsible for taking your static assets and transforming them into a format that can be served by a CDN. The deployment tool is responsible for taking your static site and deploying it to a CDN.

> Static site generators (SSG) are _"A tool which can be run as part of a build to transform content, data, and templates into files which can be deployed to a hosting environment as a ready-to-serve web site."_ — Check out more at [jamstack.org](https://jamstack.org/glossary/ssg/).

## History of Static Hosting

Static hosting is not new idea.

The idea of static hosting is to host static files on a server instead of running a full application on the server. This approach is simpler and more secure than traditional dynamic hosting (which is more suitable for single page web apps or monolithic repos).

The term "static hosting" was first used in the late 1990s, and it slowed down a bit during the 2000s. But after the increase in demand put on web hosting infrastructure, eventually the idea of using a database to re-render the same, static content for everyone seemed a bit wasteful. So the idea of static hosting was revived in the 2010s.

Static hosting has become increasingly popular in recent years as web development practices have evolved.

[![Data from Google Trends Static web page vs Jamstack Worldwide 2004 - present](/static-vs-jamstack.png)](https://trends.google.com/trends/explore?date=all&q=%2Fm%2F0h59wr,%2Fg%2F11hdxcnfj1)

<center>

Link: [https://trends.google.com/trends/explore](https://trends.google.com/trends/explore?date=all&q=%2Fm%2F0h59wr,%2Fg%2F11hdxcnfj1)

</center>

Today, in the 2020s, we enjoy the benefits of static hosting by pre-rendering content and then delivering it to the user in a format that renders reliably and quickly. It's a highly efficient way to deliver content without needing to make database queries or other expensive resources. This type of hosting is becoming increasingly popular as it can provide faster loading times and better scalability than traditional hosting solutions.

## Jamstack Buddies

There are a variety of Jamstack frameworks to choose from. Some are faster than others, but they all have the same thing in common: they use markup languages like Markdown, HTML, and CSS to create static websites.

As far as their features and capabilities, it's unfair to directly compare these frameworks because they are all very different. However, I think it's important to review them together because they are all very popular at certain junctures in the last few years. They all have their own strengths and weaknesses that can be grouped into similar categories.

- [Jekyll & Hugo](/en/guides/jekyll-and-hugo/)
- [Gatsby & Gridsome](/en/guides/gatsby-and-gridsome/)
- [Eleventy & Astro](/en/guides/eleventy-and-astro/)
- [Docusaurus & VuePress](/en/guides/docusaurus-and-vuepress/)

## Hosting and Deployment

The beautiful thing about Jamstack is that you can host your site anywhere. You can host your site on a CDN, a server, or even a static file hosting service like Netlify or Vercel. The only requirement is that your site is static. This means that you're working with built HTML, CSS, and JavaScript files. You're not working with a server-side language like PHP or Ruby or even a database like MySQL or MongoDB. WordPress is a common example of a server-side application. It's a content management system that uses a database to store content and a server-side language to render the content into HTML. This is a very different approach than Jamstack.

> Curious to learn more about hosting options? Check out the [Hosting Options](/en/hosting-options/) page.

### What does the bundler do?

A bundler takes a collection of files that are bundled together, and helps you to transform them into a format that can be served by a network. Kinda like a zip file.

Webpack is an example of bundler that takes your JavaScript files and bundles them together into a single file that can be served by a CDN. Some newer bundlers like Vite and Snowpack are able to bundle your JavaScript files without needing to bundle your CSS and HTML files.

### What's the deployment tool?

Deployment tools are tools that allow you to deploy your static site to a CDN. Some examples of deployment tools are Netlify, Vercel, and GitHub Pages.
