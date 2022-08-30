import React, { useRef } from 'react'

export default function UseRef() {

    const inputDOM = useRef()
    const handleSubmit = () => {
        inputDOM.current.style.backgroundColor = "Pink";
        inputDOM.current.style.color = "white";
        inputDOM.current.id = "fname"
        inputDOM.current.className = "fname"
        inputDOM.current.width = "100"
    }
    return (
        <div>
            <input id="d1" type="text" ref={inputDOM} />
            <button onClick={handleSubmit}>Click</button>
        </div>
    )
}
