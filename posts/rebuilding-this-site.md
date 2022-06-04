---
title: 'Rebuilding this site'
date: '2022-05-30'
excerpt: 'My personal portfolio site was getting a bit long in the tooth so it was time for a change and to learn some new things along the way.'
tags: ['React', 'Nextjs', 'Sveltekit']
---

As a front end developer it can be difficult to get across your abilities to potential employers or freelance clients however one tool that can definitely help is having a portfolio website.

It's a chance to show you can actually build something and really helps you stand out from the crowd as you'd be amazed by the amount of front end developers who simply don't bother.

It does, of course, mean you have to make an effort to keep it up to date and it was time to overhaul mine.

This would also be the ideal project to try out some new things so I ended up building the exact same site using three different front end frameworks.

**This isn't a direct, detailed comparison of different frameworks, just some general observations.**

## The React Version

My day job sees me working with React and Styled Components so this was the obvious choice for the first version.

I'm a big fan of what Styled Components can do however I'm not so keen on the large amount of abstraction that goes on and would like to be closer to the HTML markup.

To handle the contact form I had to create a simple NodeJS backend with Nodemailer being used to send with SMTP. It's a little bit of a nuisance however I prefer handling this myself rather than involving a third party like SendGrid for sending emails.

**Overall I knew exactly what I'd be letting myself in for and it all went smoothly.**

## The NextJS version

For the second version I decided to try NextJS, a very popular framework built on top of React. I've worked with Gatsby before and was curious to see how this would fit in next to that and the vanilla React experience.

I decided to go with the recommended CSS Modules for styling. This was a good experience but after working with Styled Components for so long you have to reset your brain somewhat.

Ths contact form was handled using a serverless function. This is a piece of code written in a backend language that takes an HTTP request and provides a response. To put it simply it allows you to tap into backend functionality without having to write a backend so this gets a thumbs up from me.

**Given that this was my first time with NextJS and CSS Modules the overall experience was positive however it was still essentially just React.**

## The Sveltekit version

Right from the start **everything feels fast, we're talking a true generational leap** here. It uses Vite as a build tool and it makes webpack feel old and clunky in comparison.

Being so entrenched in the React ecosystem I was surprised that there's no virtual DOM, it's replaced by the actual DOM (craziness!). Svelte writes code that surgically updates the DOM when the state of your app changes so no more senseless rerendering of components that can often be seen in React. Don't get me wrong, **React does a good job but this is just … better**.

The experience of writing code in Sveltekit is also a big improvement. Files are comprised of Javascript, HTML (with a simple template syntax to handle programmatic considerations) and CSS. I don't have a particular problem with how React does things however when you start working with Sveltekit **you realise just how far React has strayed from the standards based approach I started with**.

As with NextJS the contact form was handled by a serverless function using endpoints and also gets a thumbs up.

It's not all good and there are a few negatives:

- I got stuck a few times and the small community made it rather difficult to find the solution
- It's still in Beta so there's no real way of knowing what might change between now and release
- I noticed a few issues with the tooling surrounding svelete. This could have been just a local issue but it didn't feel quite as complete

## And the winner is ... Sveltekit!

Despite me gushing over Sveltekit this was a very close call between Sveltekit and NextJS.

When working on side projects I usually try and stick with whatever tech stack my day job uses to help me improve my skills. This made NextJS the obvious choice but **working with Sveltekit really did feel like a return to simpler times** where you could just write HTML, CSS, and JavaScript and that’s a BIG win for me.

It was fast, both in development and the final build, and the developer experience was great despite having to learn the Svelte way of doing things.

Just as a quick note of comparison here are the Lighthouse performance scores:

- React 86
- NextJS 95
- **Sveltkit 97**

No one knows that the future holds but with Rich Harris, Svelte's creator, now working on the project full time under Vercel the future 'should' be a bright one.
