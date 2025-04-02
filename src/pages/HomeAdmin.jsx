import React, { useState, useEffect } from "react";
import axios from "axios";

const HomeAdmin = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    position: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deleteStatus, setDeleteStatus] = useState("");

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

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://jsd5-mock-backend.onrender.com/members",
        formData
      );
      window.location.reload();
    } catch (err) {
      setError("Failed to create user.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`);
      window.location.reload();
    } catch (err) {
      setDeleteStatus("Failed to delete user.");
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-8">Generation Thailand</h1>
      <h2 className="text-5xl font-bold mb-8">Home - Admin Session</h2>
      <h3 className="flex pl-4 mb-4">Create User Here</h3>

      <div className="flex justify-around mb-8">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mr-2 px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
          className="mr-2 px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formData.position}
          onChange={(e) =>
            setFormData({ ...formData, position: e.target.value })
          }
          className="mr-2 px-4 py-2 border rounded"
        />
        <button
          onClick={handleSave}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-900 transition"
        >
          Save
        </button>
      </div>

      {deleteStatus && <p className="text-red-500">{deleteStatus}</p>}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <table className="border-collapse border border-gray-400 w-full">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Last Name</th>
              <th className="border border-gray-400 px-4 py-2">Position</th>
              <th className="border border-gray-400 px-4 py-2">Action</th>
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
                <td className="border border-gray-400 px-4 py-2">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HomeAdmin;
