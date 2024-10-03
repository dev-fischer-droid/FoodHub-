// GroceryAbout.js
import React from 'react';

const GroceryAbout = () => {
  return (
    <div className="bg-green-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-6 md:w-2/3 lg:w-1/2 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-semibold text-green-800 mb-4">About Our FOOD-HUB</h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to our  store! We are committed to providing fresh and high-quality
          products to our customers. Our mission is to make your shopping experience enjoyable
          and convenient.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Our wide range of products includes fresh products, Biryani, Pizza, Burger, and
          much more. 
        </p>
        <p className="text-gray-700 text-lg mb-4">
          As a part of our commitment to the community, we also offer online shopping and
          delivery services. You can order your food items from the comfort of your home.
        </p>
        <p className="text-gray-700 text-lg">
          Thank you for choosing us. We look forward to serving you!
        </p>
      </div>
    </div>
  );
};

export default GroceryAbout;
