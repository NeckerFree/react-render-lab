import { useState } from 'react'

const Counter = () =>
{
    const [count, setCount] = useState(0);
    const handleClick = () =>
    {
        setCount(c => c + 1);
        setCount(c => c + 1);
    };
    console.log("render counter:", count);
    return (
        <div>
            <button onClick={handleClick}>Count: {count}</button>
        </div>
    )
}
export default Counter;
