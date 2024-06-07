import React from 'react';

function Header({ isLoggedIn, userName }) {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="/" className="text-2xl font-bold">My Website</a>
        </div>
        <nav className="flex-grow">
          <ul className="flex justify-center space-x-4">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/cart">cart</a></li>
          </ul>
        </nav>
        <div className="flex items-center">
          {isLoggedIn ? (
            <>
              <span className="mr-4">Welcome, {userName}</span>
              <img
                src="/path/to/profile-picture.jpg"
                alt="Profile"
                className="w-8 h-8 rounded-full mr-4"
              />
              <a href="/profile" className="mr-4">My Profile</a>
            </>
          ) : (
            <>
              <a href="/register" className="mr-4">Register</a>
              <a href="/login">Login</a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;