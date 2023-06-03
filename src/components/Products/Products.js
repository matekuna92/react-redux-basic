import React from 'react';
import { useSelector } from 'react-redux';

const Products = () => {
    const products = useSelector(state => state.shop.products);

    return (
        <ul className='product-list'>
            {products.map(product => (
                <p>{product.title}</p>
            ))}
        </ul>
    );
};

export default Products;