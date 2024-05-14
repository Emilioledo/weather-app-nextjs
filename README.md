This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Connecting to Yahoo Weather API

1. Search for the Yahoo Weather API on RapidAPI Hub: (https://rapidapi.com/hub).
2. Navigate to the "Test Endpoint" or "Pricing" tab and subscribe to the Yahoo Weather API.

```bash

   example with fetch:
   const options = {
   method: 'GET',
   url: 'https://yahoo-weather5.p.rapidapi.com/weather',
   params: {
   },
   headers: {
   'X-RapidAPI-Key': '',
   'X-RapidAPI-Host': ''
   }
   };
```

3. Obtain your API URL, API key and host information from the "Test Endpoint" section
4. Create a .env file in the root directory of your project.
5. Add the following environment variables to your .env file:

```bash
RAPIDAPI_KEY=YOUR_RAPIDAPI_KEY
RAPIDAPI_HOST=YOUR_RAPIDAPI_HOST
```

Replace NEXT_PUBLIC_API_URL, YOUR_RAPIDAPI_KEY and YOUR_RAPIDAPI_HOST with your actual ApiUrl, RapidAPI key and host.

Now your Next.js app is ready to connect to the Yahoo Weather API!
