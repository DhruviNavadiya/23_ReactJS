import React, { useEffect, useState } from 'react'
import Fetch from './Fetch'

export default function CallHook() {
    const [products] = Fetch("http:/fakestoreapi.com/products")

    return (
        <table border="2">
            <tr>
                <td>Title</td>
            </tr>

            {products && products.map((item) =>
                <tr>
                    <td>{item.title}</td>
                </tr>
            )}
        </table>
    )
}
