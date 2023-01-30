import axios from 'axios';

const urlDBase = "http://localhost:3001"

export const GET_100_RECIPES = "GET_100_RECIPES"
export const GET_ALL_DIETS = "GET_ALL_DIETS"

export const FILTER_RECIPES_BY_NAME = "FILTER_RECIPES_BY_NAME";
export const FILTER_RECIPES_BY_DIET_TYPE = "FILTER_RECIPES_BY_DIET_TYPE";


export const getRecipes = () =>{
    return async function(dispatch){
        const {data} = await axios.get(`${urlDBase}/recipes`)
        dispatch({ type: GET_100_RECIPES, payload: data });
    };
};

export function getAllDiets() {
    return async (dispatch) => {
      const { data: allDiets } = await axios(`${urlDBase}/diets/all`);
      dispatch({ type: GET_ALL_DIETS, payload: allDiets });
    };
  };
 