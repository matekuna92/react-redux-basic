//import { useDispatch } from 'react-redux';
import Card from "../ui/Card";
//import { toggleFavoriteProduct } from '../../store/actions/productsAction';
import './ProductItem.css';
import productsContext, { ProductsContext } from '../../context/products-context';
import { useContext } from "react";

const ProductItem = (props) => {
 //   const dispatch = useDispatch();
    const toggleFav = useContext(ProductsContext).toggleFav;

    const toggleFavouriteHandler = () => {
     //   dispatch(toggleFavoriteProduct(props.id));
        toggleFav(props.id);
    }

    return (
        <Card>
            <li className='product-item'>
                <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
                <p>{props.desc}</p>
                {/* <button className={!props.isFav ? 'btn-dark' : ''} onClick={toggleFavouriteHandler}> */}
                <button className={!props.isFav ? 'btn-dark' : ''} onClick={toggleFavouriteHandler}>
                    {props.isFav ? 'Unfavourite' : 'Favourite'}
                </button>
            </li>
        </Card>
    );
}

export default ProductItem;