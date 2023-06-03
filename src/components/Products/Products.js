import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

const Products = (props) => {
    const products = useSelector(state => state.shop.products);

    return (
        <ul className='product-list'>
            {products.map(product => (
                <ProductItem
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    desc={product.description}
                    isFav={product.isFavourite}
                />
            ))}
        </ul>
    );
};

export default Products;