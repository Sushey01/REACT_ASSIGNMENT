import React from 'react';

const BlogPage = () => {
  // Updated dummy blog posts data
  const blogPosts = [
    { id: 1, title: 'The Art of Coding', content: 'In this blog post, we explore the intricate art of coding and its impact on modern society.' },
    { id: 2, title: 'Digital Marketing Strategies', content: 'Learn about effective digital marketing strategies and techniques to boost your online presence.' },
    { id: 3, title: 'Creating Websites with Ease', content: 'Discover how to create stunning and functional websites with ease using modern web development tools.' }
  ];

  return (
    <div className="blog-page bg-gray-100 py-8 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">Welcome to the Blog</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform transition duration-300 hover:scale-105">
              <div className="px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
