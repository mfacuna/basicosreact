import React, { Component } from 'react'

const Product = ({producto}) => (
    <div>
        <h4>{producto.name}</h4>
        <p>Precio: ${producto.precio}</p>
    </div>
)

export default Product;
