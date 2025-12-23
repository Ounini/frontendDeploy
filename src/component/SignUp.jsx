import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:2468/signup", {
        email,
        password,
      });
      console.log(res);
      alert("User registered: " + res.data.email);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <input
        name="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
