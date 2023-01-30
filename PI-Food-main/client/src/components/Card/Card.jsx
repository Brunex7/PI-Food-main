import style from './Card.module.css'

const Card = (props) => {
    return(
        <div className={style.card}>
            <h1>{props.name}</h1>
            <img className={style.imag} src={props.image} alt={props.name}/>
            <p>HealthScore:{props.healthScore}</p>
        </div>
    )
}

export default Card;