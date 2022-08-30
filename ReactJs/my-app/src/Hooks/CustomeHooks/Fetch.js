import React, { useEffect, useState } from 'react'

export default function Fetch(url) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => setData(json))
    })
    return (data);
}
