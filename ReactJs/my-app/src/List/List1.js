import React from 'react'
import style from "./style.css";

function ListComp(props) {
    return (
        <li>Array : {props.array}</li>
    )
}
export default function List1() {
    const array = ["Use Array.map", "Not a for loop", "Give each item a unique Key", "Avoid using array index as the Key"];

    return (
        <>
            <center>
                <form className={`head ${style.head}`}>
                    <table>
                        <div>
                            <h1 className={`heading ${style.heading}`}>The "React Way" to Render a List</h1>
                            <br></br>
                            <ul className={`list ${style.list}`}>
                                {
                                    array.map((c) =>
                                        <ListComp array={c} />
                                    )
                                }
                            </ul>
                        </div>
                    </table>
                </form>


            </center>
        </>
    )
}
