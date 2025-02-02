import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import BlogPosts from './components/BlogPosts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <BlogPosts />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
