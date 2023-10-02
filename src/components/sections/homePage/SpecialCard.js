import {Link} from 'react-router-dom';
import BikeIcon from '../../../assets/bikeicon.svg';

export default function SpecialCard(props) {
    return (
        <article className="menu-card">
            <img src={props.image} alt="Special Menu"></img>
            <section className="menu-card-content">
                <h1>{props.name}</h1>
                <h3>{props.price}</h3>
                <p>{props.description}</p>
                <article className='order-bottom'>
                <Link className="special-button"to="/order">Order for Delivery</Link>
                <img className="special-icon" src={BikeIcon} alt="Bike Icon"></img>
                </article>
            </section>
        </article>
    );
}