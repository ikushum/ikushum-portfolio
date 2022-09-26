---
title: Reasons why you might not want to switch to Vite
description: Vite sure is the next-generation frontend tooling technology. However, there are a few known issues that might even be a deal breaker for you.
image: 1.jpeg
author: Ishan Subedi
createdAt: 2022-09-26
---

Vite sure is the next-generation frontend tooling technology. However, there are a few known issues that might even be a deal breaker for you. In this post, I will explain a few problems we had to face when switching from Webpack to Vite at Labster.

## Why we switched to Vite

Webpack has always been the big player when it comes to bundling frontend applications. However, as browsers became more advanced and started supporting ES modules natively, the need for bundling frontend applications for development is no longer required. This is what Vite leverages to give itself an edge over webpack. 

Unlike webpack, Vite makes the dev server available instantly with very minimal processing and lets the browser do the rest of the heavy lifting. This enhances the development experience quite a lot since we no longer have to wait for the bundler and the dev server is up and running in just a couple of seconds.

The images below (taken from [Vite documentation](https://vitejs.dev/guide/why.html)) explain how Webpack and Vite spin up development servers.

<img width="100%" src="/journals/reasons-you-should-not-use-vite/bundler-based.png">

<img width="100%" src="/journals/reasons-you-should-not-use-vite/native-esm-based.png" class="mb-6">

## Reason #1: Slow page loads

As promised by Vite, the initial server start time was super fast. However, the subsequent page load time was extremely slow. This might not be noticeable if the page depends only on a few modules. But in our case, there were some pages importing lots of modules that the browser had to fetch, process, and render. This obviously is a lot of work for the browser and as a result, it took a significant amount of time for the pages to render.

**Solution**: Fortunately, we were able to significantly improve the page load speed by lazy loading some components. In Vue3, there is a function called `defineAsyncComponent` that loads a component from the server when it's needed. This is how it can be used:
```js
const MyLazyComponent = defineAsyncComponent(
  () => import(/* path of the component */),
  LoadingComponent
);
```

## Reason #2: Cannot use `require`

Evan You himself has mentioned this on a [Github Issue](https://github.com/vitejs/vite/issues/1241#issuecomment-762367047). We simply cannot use `require` function to import things into our source code. We were using it in a few places to import dynamic assets and had to find a solution. <img width="100%" src="/journals/reasons-you-should-not-use-vite/cannot-use-require.png" class="my-3">
**Solution**: For us, the solution was pretty straightforward. We moved these dynamic assets to a static folder and just accessed them using their static path. This might not be an ideal solution for all cases.

## Reason #3: No type checking

One of the amazing things about Vite is that it supports Typescript out of the box. However, there's a catch - Typescript in Vite is transpile only. This means Vite does not perform any type checking. It uses esbuild which is written in Go to transpile the typescript. This ensures 10-100x faster speed but as a tradeoff, we don't get type checking capability. 

**Solution**: For Vue, we can use a command line type checking tool called [vue-tsc](https://github.com/johnsoncodehk/volar/tree/master/packages/vue-tsc). They recently started to support watch mode which can be run in parallel to Vite dev server. It is also recommended to use a good IDE setup for instant feedback on type errors.

## Final Thoughts
These are the major issues we encountered when switching from Webpack to Vite at Labster. Seeing these issues was annoying at first. But as we developed alternatives and found solutions, we started enjoying developing with Vite. Despite some known issues and the fact that the technology came out very recently, Vite definitely feels like the next-generation tooling technology. Highly recommended for an amazing developer experience.
