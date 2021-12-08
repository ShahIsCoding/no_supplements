import * as actionTypes from './actionTypes';
let initialState = {
    isLoading : true,
    people:[]
};
export const Reducer = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.ADDING_PEOPLE:
            return{
                ...state,
                isLoading:false,
                people:action.payload
            }
        case actionTypes.LOADING:
            return{
                ...state,
                isLoading:true,
                people:[]
            }
        default: return state;
    }
};