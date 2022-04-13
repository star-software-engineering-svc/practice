
import '../App.css';

function Card(props) {
    return (
        <div className='mycard'>
            <img src={props.image} />
            <div>{props.title}</div>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;
