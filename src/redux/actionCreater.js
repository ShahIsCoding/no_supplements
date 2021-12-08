import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchPeople = ()=>{
    return dispatch =>{
        dispatch(loading)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp =>{
            const users = resp.data;
            dispatch(addPeople(users))    
        })
    }
}
export const loading = () =>({
    type:actionTypes.LOADING
});
export const addPeople = people =>({
    type:actionTypes.ADDING_PEOPLE,
    payload:people
});