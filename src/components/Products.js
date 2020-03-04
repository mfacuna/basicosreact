import React, { Component, Fragment } from 'react';
import Product from './Product'

class Products extends Component {

    state = {
        productos : [
            { id : 1, name : 'React js', precio: 30 },
            { id : 2, name : 'Vue js', precio: 30 },
            { id : 3, name : 'Angular', precio: 30 },
            { id : 4, name : 'Node js', precio: 30 },
        ]
    }

    componentDidMount() {
        console.log(1);
    }

    componentWillMount() {
        console.log(2);
    }

    componentWillUpdate() {
        console.log(3);
    }

    componentWillUnmount() {
        console.log(4);
    }



    render() {
        console.log(5);
        const {productos} = this.state;

        return (
            <Fragment>
                <h3>Lista de Productos</h3>
                {productos.map(producto => (
                    <Product
                        key={producto.id}
                        producto = {producto}
                />
                ))}
            </Fragment>
        );
    }
}

export default Products;