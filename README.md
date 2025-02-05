# Nadeesha Fernando | Portfolio Website

Welcome to my portfolio website repository! This project showcases my skills, projects, and blog posts in a clean, modern, and responsive design. Built with **Vite + React.js + TypeScript**, this website is hosted on **Cloudflare Pages** and integrates with the **Google Blogger API** for dynamic blog content.

---

## **Features**

- **Responsive Design**: Works seamlessly on all devices, from desktops to mobile phones.
- **Dynamic Content**: Fetches GitHub projects and blog posts using APIs.
- **Modern Animations**: Smooth transitions and hover effects for a polished user experience.
- **Blog Integration**: Displays blog posts fetched from Google Blogger.
- **Contact Form**: Allows visitors to reach out directly from the website.

---

## **Tech Stack**

- **Frontend**: React.js + TypeScript
- **Styling**: CSS with custom variables for theming
- **Build Tool**: Vite
- **Hosting**: Cloudflare Pages
- **Blog Integration**: Google Blogger API
- **Package Manager**: Bun

---

## **Live Demo**

Check out the live website here: [https://nadeeshafdo.github.io](https://nadeeshafdo.github.io)

---

## **Getting Started**

Follow these steps to set up the project locally:

### **Prerequisites**

- **Node.js**: Ensure you have Node.js installed.
- **Bun**: Install Bun as your package manager. You can install it from [here](https://bun.sh/).

### **Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nadeeshafdo/nadeeshafdo.github.io.git
   cd nadeeshafdo.github.io
   ```

2. **Install dependencies**:
   ```bash
   bun install
   ```

3. **Run the development server**:
   ```bash
   bun run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## **Environment Variables**

To run this project, you'll need to set up the following environment variables:

1. **Google Blogger API Key**:
   - Create an API key from the [Google Cloud Console](https://console.cloud.google.com/).
   - Add it to your `.env` file:
     ```env
     VITE_BLOGGER_API_KEY=your_api_key_here
     ```

2. **Blogger Blog ID**:
   - Get your blog ID from your Blogger dashboard.
   - Add it to your `.env` file:
     ```env
     VITE_BLOGGER_BLOG_ID=your_blog_id_here
     ```

---

## **Deployment**

This project is deployed on **Cloudflare Pages**. To deploy your own version:

1. Fork this repository.
2. Connect your repository to Cloudflare Pages.
3. Add the required environment variables in the Cloudflare Pages dashboard.
4. Deploy!

---

## **Acknowledgements**

- **Vite**: For the fast and modern build tool.
- **React.js**: For the component-based architecture.
- **Cloudflare Pages**: For hosting and deployment.
- **Google Blogger API**: For dynamic blog content.

---

Thank you for visiting my portfolio website repository! 🚀
