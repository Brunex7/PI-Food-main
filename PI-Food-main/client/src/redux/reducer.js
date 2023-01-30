import { 
    GET_100_RECIPES, 
    GET_ALL_DIETS,
    FILTER_RECIPES_BY_NAME,
    FILTER_RECIPES_BY_DIET_TYPE,
} from "./action";

const initialState = {
    recipes: [],
};

const rootReducer = (state = initialState, action ) => {
    switch(action.type) {
        case GET_100_RECIPES:
            return {...state, recipes: action.payload}
        default:
            return {...state}

        case GET_ALL_DIETS:
            return state.allDiets.length
                ? { ...state }
                : {
                    ...state,
                    allDiets: action.payload,
                  };
        case FILTER_RECIPES_BY_NAME:
        case FILTER_RECIPES_BY_DIET_TYPE:
            return {
                    ...state,
                    filteredRecipes: [...action.payload],
                  };
    }
};


export default rootReducer;