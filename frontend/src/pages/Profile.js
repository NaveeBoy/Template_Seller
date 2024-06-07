import React from 'react';

function Profile() {
  // Fetch user profile data from your backend API
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    // Other user profile data
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>
      <div>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {/* Display other user profile data */}
      </div>
    </div>
  );
}

export default Profile;