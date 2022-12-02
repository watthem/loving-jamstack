---
title: Netlify
description: An overview of Netlify and how to use it to host your Jamstack site.
layout: ../../layouts/MainLayout.astro
---

## Overview

Netlify is pretty sweet. It's a hosting platform that makes it easy to deploy your Jamstack site. It's also a great place to host your site if you are using a Jamstack framework like Gatsby or Gridsome.

Netlify makes it easy to deploy and host Jamstack sites, and it offers a wide range of features and tools to help developers and teams build, deploy, and manage their sites efficiently. Some of the key features of Netlify include continuous deployment, global edge caching, serverless functions, and more.

## Getting started with Netlify

To use Netlify to host your Jamstack site, you will need to create a Netlify account, connect your Git repository, and configure your build settings. For those comfortable with Git, Netlify offers very easy wizards that will help you get started with ease.

If you are new to Git and are not familiar with how to use it, you can still get started with Netlify. Netlify offers a range of tools and features that make it easy to deploy and manage your site, even if you are not familiar with Git.

To get started with Netlify without knowing Git, you can follow these steps:

1. Sign up for a Netlify account: To use Netlify, you will need to create a Netlify account. You can sign up for a free account at [https://www.netlify.com/](https://www.netlify.com/).

2. Connect your site to Netlify: Once you have signed up for a Netlify account, you can connect your site to Netlify by providing the URL of your existing site or by uploading your site's files directly to Netlify.

3. Configure your build settings: Once your site is connected to Netlify, you can configure your build settings to specify how Netlify should build and deploy your site. This may involve selecting a build environment, providing build command and publish directory, and more.

## Deploying your site on Netlify

Once you have set up your Netlify account and connected your Git repository, you can deploy your site by pushing your code to your Git repository. Netlify will automatically build and deploy your site, and you can track the progress of your deployment in the Netlify dashboard.

## Managing and maintaining your site on Netlify

After your site is deployed on Netlify, you can manage and maintain it using the Netlify dashboard. You can view your site's analytics, set up custom domains, enable HTTPS, and more.

### Custom domains

To manage DNS using Netlify, you will need to connect your domain to Netlify and then add and manage your DNS records in the Netlify dashboard. This will allow you to control which services and sites your domain points to, and you can use DNS to set up custom domains, enable HTTPS, and more.

Here is an example of how you can manage DNS using Netlify:

Let's say you have a domain, example.com, and you want to use Netlify to manage DNS for this domain. To do this, you will need to connect your domain to Netlify. To do this, you can follow these steps:

1. Sign in to your Netlify account and go to the Domain settings page.
2. Click the "Add domain" button and enter your domain name (example.com) in the field provided.
3. Follow the instructions in the Netlify dashboard to verify your domain and connect it to Netlify. This may involve updating your DNS records with your domain registrar.
4. Once your domain is connected to Netlify, you can go to the DNS settings page to manage your DNS records.
5. In the DNS settings page, you can add, edit, and delete DNS records for your domain. For example, you can add an A record to point your domain to a specific IP address, or you can add a CNAME record to redirect traffic from a subdomain to a different site or location.

Using Netlify to manage DNS for your domain has a few limitations. For example, you can only manage DNS for domains that are connected to Netlify, and you cannot use Netlify to manage DNS for root domains (e.g. example.com) if you are using a custom domain registrar. Additionally, some advanced DNS features and settings may not be available in the Netlify dashboard.

Overall, using Netlify to manage DNS for your domain is a convenient and user-friendly way to control which services and sites your domain points to, but it has some limitations that you should keep in mind.

### Manage multiple sites

To host two Netlify sites under the same domain, you can use Netlify's proxy rewrite feature. This allows you to redirect traffic from one subdomain to a different site or location on the same domain.

Here is an example of how you can use proxy rewrite to host two Netlify sites under the same domain:

Let's say you have two sites, site1.com and site2.com, and you want to host both of these sites under the same domain, example.com. You can use the proxy rewrite feature to redirect traffic from example.com/site1 to site1.com and example.com/site2 to site2.com.

To set up proxy rewrite, you will need to add a \_redirects file to the root of your site's repository. The_redirects file should contain the following lines:

```toml
/site1/* https://site1.com/:splat 301!
/site2/* https://site2.com/:splat 301!
```

This will redirect all traffic from example.com/site1 to site1.com and example.com/site2 to site2.com.

There are a few limitations to using proxy rewrite. For example, you can only redirect traffic from a subdomain to a different site or location on the same domain, and you cannot redirect traffic from the root domain (example.com) to a different site or location. Additionally, the proxy rewrite feature only works with sites that are deployed on Netlify.

Overall, proxy rewrite is a useful feature if you want to host multiple sites under the same domain, but it has some limitations that you should keep in mind.

## Conclusion

Netlify is a great hosting platform for Jamstack sites, and it offers a range of features and tools to make it easy to deploy, manage, and maintain your site.
