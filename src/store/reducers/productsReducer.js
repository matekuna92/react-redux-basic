

const initialState = {
    products: [
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
      ]
}

const productsReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'TOGGLE_FAVOURITE' :
			const productIndex = state.products.findIndex(product => product.id === action.productId);
			const newFavStatus = !state.products[productIndex].isFavorite;
			const updatedProducts = [...state.products];

			updatedProducts[productIndex] = {
				...state.products[productIndex],
				isFavorite: newFavStatus
			};

			return {
				...state,
				products: updatedProducts
			};
		default: {
			return initialState;
		}
	}
}

export default productsReducer;