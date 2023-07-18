import {ADD_TODO , REMOVE_TODO , ADD_TODOs_FROM_LOCAL_STORAGE} from "../context/action.types"
export default (state , action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state , action.payload];
        case REMOVE_TODO:
            return state.filter(todo => (action.payload !== todo.id))
        case ADD_TODOs_FROM_LOCAL_STORAGE:
            return action.payload;
        default:
            return state;
    }
    
}