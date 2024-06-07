import React from 'react';

function CategoryFilter() {
  const categories = ['HTML', 'React', 'Angular', 'PHP'];

  return (
    <div className="mb-4">
      <h3 className="text-lg font-bold mb-2">Categories</h3>
      <ul className="flex space-x-2">
        {categories.map((category) => (
          <li key={category}>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryFilter;