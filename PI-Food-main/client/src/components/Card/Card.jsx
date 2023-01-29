import style from './Card.module.css'

const Card = (props) => {
    return(
        <div className={style.card}>
            <p>{props.name}</p>
            <img src={props.image} alt={props.name}/>
            <p>HealthScore:{props.healthScore}</p>

        </div>
    )
}

export default Card;