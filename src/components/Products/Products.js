import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import './Products.css';
import { ProductsContext } from '../../context/products-context';

const Products = (props) => {
   // const products = useSelector(state => state.shop.products);
    const productsContext = useContext(ProductsContext);
    const productsList = productsContext.products;

    return (
        <ul className='product-list'>
            {productsList.map(product => (
                <ProductItem
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    desc={product.description}
                    isFav={product.isFavorite}
                />
            ))}
        </ul>
    );
};

export default Products;