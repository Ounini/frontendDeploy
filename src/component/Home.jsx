import { useCallback, useMemo, useState } from "react";
import Navbar from "./Navbar";
import ExpensiveCal from "./ExpensiveCal";
import Button from "./Button";
import Child from "./Child";
import DataFetching from "./DataFetching";
import Slider from "./Slider";

function Home() {
  const [count, setCount] = useState(0);
  const result = useMemo(() => ExpensiveCal(count), [count]);

  const [buttonCount, setButtonCount] = useState(0);
  const increament = useCallback(() => setButtonCount((c) => c + 1), []);

  return (
    <>
      <Slider />
      <div>Welcome Home page</div>

      <p>Result: {result}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <p>Count: {buttonCount}</p>
      <Button onClick={increament} label="Increment" />

      <Child value="Static Data" />
      <button onClick={() => setCount(count + 1)}>Increase {count}</button>

      <DataFetching />
    </>
  );
}

export default Home;
