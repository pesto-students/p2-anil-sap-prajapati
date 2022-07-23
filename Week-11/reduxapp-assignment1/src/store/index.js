import { legacy_createStore as createStore } from 'redux';



const reducerFn = (state = { light : true}, action) =>{

    if(action.type == "lit"){
        return {
            light : !state.light
        }
    }
    
return state;
}
const store = createStore(reducerFn);

export default store