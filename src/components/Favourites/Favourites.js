import React, { useContext } from 'react';
//import { useSelector } from 'react-redux';
import FavouriteItem from './FavouriteItem';
import productsContext, { ProductsContext } from '../../context/products-context';

const Favourites = () => {
  //  const favProducts = useSelector(state => state.shop.products.filter(product => product.isFavorite));
    const favouriteProducts = useContext(ProductsContext).products.filter(product => product.isFavorite);

    let content = <p className='placeholder'>Got no favorites yet!</p>;

    if(favouriteProducts.length > 0) {
        content = (
            <ul className='fav-product-list'>
                {favouriteProducts.map(product => (
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