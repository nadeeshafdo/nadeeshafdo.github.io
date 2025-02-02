# Nadeesha Fernando's Portfolio

This is the source code for Nadeesha Fernando's personal portfolio website.

## Technologies Used

- React
- TypeScript
- Vite
- CSS3
- Google Blogger API

## Getting Started

1. Clone the repository
2. Run `npm install` to install dependencies
3. Set up the Google Blogger API (see below)
4. Run `npm run dev` to start the development server
5. Open `http://localhost:5173` in your browser (Vite uses port 5173 by default)

## Setting up the Google Blogger API

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Blogger API for your project
4. Create credentials (API key) for the Blogger API
5. Copy the API key and replace `YOUR_API_KEY` in `src/utils/blogApi.ts`
6. Find your Blogger ID (you can find this in your Blogger dashboard URL)
7. Replace `YOUR_BLOG_ID` in `src/utils/blogApi.ts` with your actual Blogger ID

## Building for Production

Run `npm run build` to create a production build of the website.

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## License

This project is open source and available under the [MIT License](LICENSE).
