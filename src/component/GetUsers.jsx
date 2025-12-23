import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GetUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:2468/users");

        setLoading(false);
        setUsers(res.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Users not found.</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          <Link to={`/users/${user._id}`}>{user.email} </Link>
        </li>
      ))}
    </ul>
  );
}

export default GetUsers;
