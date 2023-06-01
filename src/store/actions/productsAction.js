const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';
const toggleFavoriteProduct = id => {
    return { type: TOGGLE_FAVOURITE, productId: id };
}

export {
    TOGGLE_FAVOURITE,
    toggleFavoriteProduct
}