import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const params = useParams();


    return (
        <>
            <h1>Product Detail</h1>
            <h1>{params.productId}</h1>
        </>
    )
}
