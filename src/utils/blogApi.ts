
import { BlogPost } from '../types/types';

const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const BLOG_ID = 'YOUR_BLOG_ID'; // Replace with your actual blog ID

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    const data = await response.json();
    return data.items.map((item: any) => ({
      id: item.id,
      title: item.title,
      content: item.content,
      url: item.url,
      published: item.published,
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}
