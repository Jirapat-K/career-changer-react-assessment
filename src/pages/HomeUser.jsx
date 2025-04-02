import React from "react";

const HomeUser = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-8">Generation Thailand</h1>
      <h2 className="text-5xl font-bold mb-8">Home - User Session</h2>
      <div className="flex justify-around px-16 py-16">
        <a
          href="user"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-900 transition"
        >
          User Home Session
        </a>
        <a
          href="admin"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-900 transition"
        >
          Admin Home Session
        </a>
      </div>
    </div>
  );
};

export default HomeUser;
