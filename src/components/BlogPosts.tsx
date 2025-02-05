import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/BlogPosts.css';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  published: string;
  url: string;
  author: {
    displayName: string;
  };
}

const BlogPosts: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const BLOG_ID = import.meta.env.VITE_BLOGGER_BLOG_ID;
  const API_KEY = import.meta.env.VITE_BLOGGER_API_KEY;

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`
        );
        const fetchedPosts = response.data.items.map((item: any) => ({
          id: item.id,
          title: item.title,
          content: item.content,
          published: item.published,
          url: item.url,
          author: {
            displayName: item.author.displayName,
          },
        }));
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return <div className="loading">Loading blog posts...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <section id="blog">
      <h2>Blog Posts</h2>
      <div className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <p className="blog-meta">
              Published on: {new Date(post.published).toLocaleDateString()} by{' '}
              {post.author.displayName}
            </p>
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <a href={post.url} target="_blank" rel="noopener noreferrer" className="blog-link">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;