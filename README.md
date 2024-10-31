# Presentation

This project consists of the creation of a website to centrally manage and centralize my personal data.
I am also taking this opportunity to create the portfolio that I must submit to the IUT by June 13, 2024, which will be present on this site.
The portfolio is the first objective.

This project is created with nuxt3 and uses TailWindCSS.
It uses yarn as package manager.

# Nuxt 3

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# yarn
yarn dev
```

## Static website

The website is now static.

It can be generate with the following command :

```bash
npx nuxt generate --dotenv .env.dev # or an other .env 
```

# Infrastructure

The infrastructure is managed by Terraform which do the link between bucket S3, Cloudfront and OVH.

## Hosting

The website files are stocked on a bucket S3 which is coupled with the Cloudfront (CDN).

## DNS

The DNS (www.tomsiouan.fr) is provided by OVH.

## Nuxt Dependencies

- tailwindcss
- color-mode
- i18n
- auto-animate
- nuxt-icon
- nuxt-mail
