import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [one, setOne] = useState(0)
    const [two, setTwo] = useState(0)

    const isEven = useMemo(() => {
        for (var i = 0; i < 1000000; i++) { }
        if (one % 2 == 0) {
            return "even";
        }

    }, [one])

    return (
        <div>
            <button onClick={() => setOne(one + 1)}>{one}</button>
            {isEven ? "even" : "odd"}
            <button onClick={() => setTwo(two + 1)}>{two}</button>
        </div>
    )
}
