import { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

function DataFetching() {
  const [users, setUsers] = useState([]);
  console.log("Users... ", users);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(res);
        setUsers(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
      }
    };
    data();
  }, []);

  return (
    <div>
      {loading ? (
        <ClipLoader color="Red" />
      ) : (
        users.map((u) => <p key={u.id}>{u.name}</p>)
      )}
    </div>
  );
}

export default DataFetching;
