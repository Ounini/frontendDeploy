import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Interval running...");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Interval stopped");
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p>Timer count: {count}</p>
      <Navbar />
    </div>
  );
}

export default Timer;
