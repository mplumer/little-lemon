import Star from '../../../assets/star.png';

export default function TestimonialCard(props) {
    return (
        <article className="testimonial-card">
            <div className="stars">
            <img src={Star} alt="star Icon"></img>
            <img src={Star} alt="star Icon"></img>
            <img src={Star} alt="star Icon"></img>
            <img src={Star} alt="star Icon"></img>
            <img src={Star} alt="star Icon"></img>
            </div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
}