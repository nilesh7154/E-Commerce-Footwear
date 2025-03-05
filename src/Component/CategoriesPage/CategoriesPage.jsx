// CategoryPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get URL parameters

function CategoryPage() {
  // Extract the categoryName from the URL
  const { categoryName } = useParams();

  // Dynamically render content based on categoryName
  let content;

  switch (categoryName) {
    case 'sale':
      content = <p>Welcome to the Sale! Check out our discounts.</p>;
      break;
    case 'new':
      content = <p>Discover the latest arrivals in our store.</p>;
      break;
    case 'men':
      content = <p>Explore our men's collection.</p>;
      break;
    case 'women':
      content = <p>Find stylish items in our women's section.</p>;
      break;
    case 'kids':
      content = <p>Fun and comfortable shoes for kids.</p>;
      break;
    case 'trending':
      content = <p>See what's trending right now!</p>;
      break;
    default:
      content = <p>Category not found.</p>;
  }

  return (
    <div className="category-page">
      <h1>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Category</h1>
      {content}
    </div>
  );
}

export default CategoryPage;
