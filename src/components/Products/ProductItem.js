import Card from "../ui/Card";


const ProductItem = (props) => {
    const toggleFavouriteHandler = () => {
        console.log('toggle');
    }

    return (
        <Card>
            <div className='product-item'>
                <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
                <p>{props.description}</p>
                <button className={props.isFav ? 'btn-dark' : ''} onClick={toggleFavouriteHandler}>
                    {props.isFav ? 'Unfavourite' : 'Favourite'}
                </button>
            </div>
        </Card>
    );
}

export default ProductItem;