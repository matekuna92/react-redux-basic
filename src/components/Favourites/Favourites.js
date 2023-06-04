import React from 'react';
import { useSelector } from 'react-redux';
import FavouriteItem from './FavouriteItem';

const Favourites = () => {
    const favProducts = useSelector(state => state.shop.products.filter(product => product.isFavorite));
    console.log('favorite products', favProducts);

    let content = <p className='placeholder'>Got no favorites yet!</p>;

    if(favProducts.length > 0) {
        content = (
            <ul className='fav-product-list'>
                {favProducts.map(product => (
                    <FavouriteItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        desc={product.description}
                        isFav={product.isFavorite}
                    />
                ))}
            </ul>
        );
    }

    return content;
};

export default Favourites;