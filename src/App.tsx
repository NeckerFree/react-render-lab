import { memo, startTransition, useEffect, useState } from "react"
import Counter from "./Components/Counter";
const Child = memo(
  function Child({ value, onClick }: { value: number; onClick: () => void })
  {
    console.log("Child Rendered")
    useEffect(() =>
    {
      console.log("Child commited to DOM")
    });
    return <div>Child value: {value}</div>
  }
);
const handleClick = () =>
{
  () => console.log("clicked")
}

export default function App()
{
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');
  const slowLoop = performance.now();
  while (performance.now() - slowLoop < 50) { }

  console.log("App rendered");
  useEffect(() =>
  {
    console.log("App commited to DOM")
  });
  return (
    <>
      <h1>Count:{count} </h1>
      <Counter />
      <button onClick={() =>
      {
        setCount(c => c + 1);
        setCount(c => c + 1);
        console.log("clicked");
      }} > Increment</button>
      <Child value={count} onClick={handleClick} />
      <button onClick={() => theme === "ligth" ? setTheme("dark") : setTheme("ligth")}>Change theme</button>
      <div>Current theme: {theme}</div>
      <button onClick={() =>
      {
        startTransition(() =>
        {
          setCount(c => c + 1);
        });
      }}
      >Low Priority Update</button>
    </>
  );
}

