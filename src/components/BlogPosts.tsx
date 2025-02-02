
import React, { useState, useEffect } from 'react';
import '../styles/BlogPosts.css';
import { fetchBlogPosts } from '../utils/blogApi';
import { BlogPost } from '../types/types';

const BlogPosts: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchBlogPosts();
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (err) {
        setError('Failed to load blog posts');
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return <div>Loading blog posts...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section id="blog" className="blog-posts">
      <h2>Blog Posts</h2>
      <div className="posts-container">
        {posts.map((post) => (
          <article key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 150)}...</p>
            <a href={post.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
