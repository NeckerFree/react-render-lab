import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function App()
{
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  console.log("render");

  // useLayoutEffect(() =>
  // {
  //   console.log("commit (layout effect)"); // Log en Commit phase

  // });
  useEffect(() =>
  {
    countRef.current = count;
  });
  useEffect(() =>
  {
    const id = setInterval(() =>
    {
      console.log("count:", countRef.current);
    }, 1000);
    return () => clearInterval(id);
  }, []);


  return <button onClick={() => setCount(c => c + 1)}>+</button>;
  <label>{count}</label>;
}

