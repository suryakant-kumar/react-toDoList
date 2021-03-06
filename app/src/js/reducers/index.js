import { ADD_LIST, REMOVE_LIST } from "../constants/action-types";

const initialState = {
    doList: []
}

const rootReducer = (state = initialState, action) => {
    if (action.type === ADD_LIST) {
        return Object.assign({}, state, { doList: state.doList.concat(action.payload) })
    }
    if (action.type === REMOVE_LIST) {
        const newToDoList = [...state.doList];
        newToDoList.splice(action.payload, 1);
        return Object.assign({}, state, { doList: newToDoList })
    }
    return state;
}
export default rootReducer;