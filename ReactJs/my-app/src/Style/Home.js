import React from 'react'
import custom from "./custom.module.css";

export default function Home() {
    return (
        <>
        <section className={`${custom.home}`}>
            <div className={`${custom.content}`}>
                <h1>𝖘𝖙𝖔𝖕 & 𝖘𝖍𝖔𝖕!!</h1>
                <button className={`${custom.btn}`}><b>Get Yours Now</b></button>
            </div>
        </section>
        </>
    )
}
