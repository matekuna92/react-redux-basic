/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';

export const ProductsContext = createContext({
    products: [],
    toggleFav: (id) => {}
});

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const [productsList, setproductsList] = useState([
        {
          id: 'p1',
          title: 'Red Scarf',
          description: 'A pretty red scarf.',
          isFavorite: false
        },
        {
          id: 'p2',
          title: 'Blue T-Shirt',
          description: 'A pretty blue t-shirt.',
          isFavorite: false
        },
        {
          id: 'p3',
          title: 'Green Trousers',
          description: 'A pair of lightly green trousers.',
          isFavorite: false
        },
        {
          id: 'p4',
          title: 'Orange Hat',
          description: 'Street style! An orange hat.',
          isFavorite: false
        }
    ]);

    const toggleFavourite = productId => {
        setproductsList(currentProductsList => {
            const productIndex = currentProductsList.findIndex(product => product.id === productId);
			const newFavStatus = !currentProductsList[productIndex].isFavorite;
			const updatedProducts = [...currentProductsList];

			updatedProducts[productIndex] = {
				...currentProductsList[productIndex],
				isFavorite: newFavStatus
			};

        console.log('Updated Products', updatedProducts);
        return updatedProducts;
        });
    };

    return (
        <ProductsContext.Provider value={{ products: productsList, toggleFav: toggleFavourite }}>
            {props.children}
        </ProductsContext.Provider>
    );
}