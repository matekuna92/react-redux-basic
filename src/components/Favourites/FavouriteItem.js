import Card from "../ui/Card";
import './FavouriteItem.css';

const FavouriteItem = (props) => {
    return (
        <Card>
            <div className='favourite-item'>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </Card>
    );
}

export default FavouriteItem;