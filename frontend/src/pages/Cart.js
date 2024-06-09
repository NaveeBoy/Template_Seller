import React, { useState } from 'react';
import { FaSearch, FaTrashAlt, FaShoppingCart, FaRegEye } from 'react-icons/fa';

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Template 1',
      description: 'This is template 1',
      thumbnail: '/HomePage.PNG',
      demoUrl: '/templates/1',
    },
    {
      id: 2,
      title: 'Template 2',
      description: 'This is template 2',
      thumbnail: '/HomePage.PNG',
      demoUrl: '/templates/2',
    },
    // Add more cart items as needed
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const filteredCartItems = cartItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBuyNow = (itemId) => {
    // Implement your buy logic here, e.g., redirect to a checkout page or process the payment
    console.log(`Buy clicked for item with ID: ${itemId}`);
  };

  return (
    <div style={{background:"#DAD3BE"}}>
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <div className="mb-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaSearch />
          </button>
        </div>
      </div>
      {filteredCartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCartItems.map((item) => (
            <div key={item.id} className=" shadow-md rounded-lg overflow-hidden" style={{background:"#DDDDDD"}}>
              <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={item.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center px-4 py-2"
                    style={{ minWidth: '90px', borderRadius: '10px', height: '40px' }}
                  >
                   <FaRegEye />&nbsp; Live Demo
                  </a>
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center"
                    onClick={() => handleBuyNow(item.id)}
                  >
                    <FaShoppingCart className="mr-2" /> Buy
                  </button>
                  <button
                    style={{ backgroundColor: 'red', borderRadius: '10px', justifyContent: 'center', color: 'white', height: '40px', width: '90px' }}
                    className="btn btn-secondary"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    <FaTrashAlt className="inline-block" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      )}
    </div>
    </div>
  );
}

export default Cart;
