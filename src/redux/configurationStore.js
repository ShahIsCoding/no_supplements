import {createStore,applyMiddleware} from 'redux';
import {Reducer} from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const ConfigureStore = () =>{
    const store = createStore(Reducer,composeWithDevTools(applyMiddleware(thunk)));
    return store;
}