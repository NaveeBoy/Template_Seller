import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

function TemplateCard({ template }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={template.thumbnail} alt={template.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{template.title}</h2>
        <p className="text-gray-600 mb-4">{template.description}</p>
        <div className="flex justify-between items-center">
          <a href={template.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Live Demo
          </a>
          <div className="flex space-x-2">
            <button className="btn btn-secondary">
              <FaHeart className="mr-1" /> Favorite
            </button>
            <button className="btn btn-secondary">
              <FaShoppingCart className="mr-1" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateCard;