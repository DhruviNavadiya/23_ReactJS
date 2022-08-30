import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    useEffect(() => {
        for (var i = 0; i < 1000; i++) { }
    }, [count, count1])


    return (
        <div>
            <h1>Count :</h1>
            <h1>Count :</h1>
            <button onClick={() => setCount(count + 1)}>Click</button>&nbsp;
            <button onClick={() => setCount1(count1 + 1)}>Click</button>
        </div>
    )
}

