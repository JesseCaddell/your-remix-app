import React from 'react';

const HomePage = () => {
  const blogPosts = [
    {id: 1, title: 'Introduction to Remix', slug: 'introduction-to-remix' },
    {id: 2, title: 'Getting Started with Remix', slug: 'getting-started-with-remix' }
  ];

  return (
    <div>
      <h1>Welcome to my blog!</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <a href={`/posts/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;