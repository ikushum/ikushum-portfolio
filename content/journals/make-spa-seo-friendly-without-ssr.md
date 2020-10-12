---
title: Making Vue/Nuxt apps Search Engine friendly without SSR
description: The concept of pre-rendering is not much highlighted in the Nuxt documentation
image: 1.jpeg
author: Ishan Subedi
---

Vue applications, by default, are not Search Engine optimized. The content of the pages are generated during the runtime. That means when the web crawlers come across the website (no matter which page), all they will discover is a plain and dumb `index.html` with no meaning full content. The `index.html` looks something like this:

```html[index.html]
<html>
<head>
  <title>Vue.js SPA</title>
</head>
<body>
  <div id="app"></div>
  <script type="text/javascript" src="app.js">
</body>
</html>
```

 The concept explained in this post is called **pre-rendering**. Prerendering is a process to preload all elements on the page in preparation for a web crawler to see it. In terms of Nuxt.js, for every file inside the `/pages` directory, an `<filename>.html` file will be generated with all the necessary content required for the crawlers. 

## How to pre-render Nuxt.js applications

First of all, we need to make sure the value of `target` property is set to `static` in `nuxt.config.js`

```js[nuxt.config.js]
export default {
  target: 'static'
}
```

Now, the command that we use to generate pre-rendered static files, is `nuxt generate`. We also need to make sure we have added the script to run `nuxt generate` in our `package.json` file

```js[package.json]
"scripts": {
  "generate": "nuxt generate"
}
```

Now it's as simple as running the code below on the terminal

```bash
yarn generate
```
or
```bash
npm run generate
```

After running this command, Nuxt.js will create a `dist` folder with everything inside ready to be deployed on a static hosting service.

## What about Dynamic Routes?

What if we have a number of dynamic routes on our website and still want them to be search engine friendly. We can still leverage the power of Nuxt.js to pre-render them. 

Let's suppose we are creating a website for a game with a certain number of features. We exactly know what those features are going to be and all the content are available in the frontend itself (meaning, we're not fetching data from any backend service). The routes for the pages could be:
- `/feature/multi-player`
- `/feature/cool-graphics`
- `/feature/super-fast`

The structure of the folder inside `pages` might be: 
 `/pages/feature/_featureName`

In this case, we can easily pre-render the individual feature pages by adding `generate.routes` property in `nuxt.config.js`

```js
generate: {
  routes: [
    '/feature/multi-player',
    '/feature/cool-graphics',
    '/feature/super-fast/'
  ]
}
```
Now after we run the `nuxt generate` command, the following files will be generated:
- `/feature/multi-player/index.html`
- `/feature/cool-graphics/index.html`
- `/feature/super-fast/index.html`

We can now deploy the generated files to any static hosting service.

## With Nuxt Content

We can also pre-render pages in an application that has dynamic routes as a result of files created for usages with `@nuxt/content`.

The example code below assumes a blog app that has dynamic routes for individual blog pages:

```js[nuxt.config.js]
generate: {
  async routes () {
    const { $content } = require('@nuxt/content')
    const blogs = await $content('blogs').only(['slug']).fetch()

    return blogs.map(blog => `/blogs/${blog.slug}`)
  }
}
```

## Conclusion

Sometimes, deploying a frontend app with a separate server just for the sake of SEO reasons is a huge overkill. It rather makes the app complex and costly. For apps that have all the SEO data available on the client-side, let's just pre-render them and host them on services like Amazon S3 or Netlify.