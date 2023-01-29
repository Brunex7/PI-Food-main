import Card from "../Card/Card"
import style from './CardsContainer.module.css'
import { useSelector } from 'react-redux'

const CardsContainer = () =>{

    const recipes = useSelector(state => state.recipes);

    return(
        <div className={style.container}>
            {recipes.results?.map(rec =>{
                return <Card 
                id = {rec.id}
                name = {rec.title}
                image = {rec.image}
                healthScore = {rec.healthScore}
                />
            })}
        </div>
    )
}

export default CardsContainer;