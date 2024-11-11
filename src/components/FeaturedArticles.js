import React from 'react';
import { Card } from 'semantic-ui-react';
import './App.css'; // Import the CSS file

const FeaturedArticles = () => {
  const articles = [
    { title: "Learning Basics of Data Structure", description: "A comprehensive guide to learn basic data structure and algorithms.", image: "https://picsum.photos/200/300?random=1" },
    { title: "React components", description: "Learn how components, hooks and DOM work in React", image: "https://picsum.photos/200/301?random=2" },
    { title: "HTML and CSS", description: "Learn basics of Html and CSS to make attractive websites", image: "https://picsum.photos/200/302?random=3" },
  ];

  return (
    <div>
      <h2>Featured Articles</h2>
      <div className="card-container">
        {articles.map((article, index) => (
          <div className="card" key={index}>
            <img src={article.image} alt={article.title} />
            <div className="card-content">
              <div className="card-header">{article.title}</div>
              <div className="card-description">{article.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
