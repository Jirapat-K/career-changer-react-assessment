import React, { useState, useEffect } from "react";
import axios from "axios";

const HomeUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://jsd5-mock-backend.onrender.com/members"
        );
        setUsers(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

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

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <table className="border-collapse border border-gray-400 w-full mt-8">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Last Name</th>
              <th className="border border-gray-400 px-4 py-2">Position</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="bg-white">
                <td className="border border-gray-400 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {user.lastname}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {user.position}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HomeUser;
