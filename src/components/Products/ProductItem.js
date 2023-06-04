import { useDispatch } from 'react-redux';
import Card from "../ui/Card";
import { toggleFavoriteProduct } from '../../store/actions/productsAction';


const ProductItem = (props) => {
    const dispatch = useDispatch();

    const toggleFavouriteHandler = () => {
        dispatch(toggleFavoriteProduct(props.id));
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