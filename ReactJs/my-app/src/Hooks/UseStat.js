import React, { useState } from 'react'

export default function UseStat() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Dhruvi")
    const handleState = () => {
        setName("Yashvi")
    }

    return (
        <div>
            <h1>Name :{name}</h1>
            <h1>Count :{count}</h1>
            <button onClick={(e) => setCount(count + 1)}>Incr</button>&nbsp;
            <button onClick={(e) => setCount(count - 1)}>Decr</button>&nbsp;
            <button onClick={() => handleState()}>Update</button>&nbsp;
        </div>
    )
}
