import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${username} and ${password}`);
  };

  return (
    <form onSubmit={formSubmit}>
      <input
        value={username}
        placeholder="Enter your username"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        value={password}
        placeholder="Enter your password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>Submit</button>
    </form>
  );
}

export default Login;
