import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../redux/action"

const Home = ()=>{
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getRecipes());
    },[dispatch]);

    return(
        <>
        <h1>Estoy en el Home</h1>
        <CardsContainer />
        </>
    )
}

export default Home;