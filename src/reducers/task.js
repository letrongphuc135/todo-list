import * as types from '../constants/ActionTypes'
let initialState = [];
var index = -1;
const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            state = action.payload;
            return [...state]
        case types.ADD_PRODUCT:
            state.push(action.payload)
            return [...state]
        case types.DELETE_PRODUCT:
            index = state.findIndex(item => item.id === action.payload)
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state]
        case types.UPDATE_STATUS_TASK:
            index = state.findIndex(item => item.id === action.id)
            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    status: !state[index].status
                }
            }
            return [...state]
        case types.UPDATE_PRODUCT:
            index = state.findIndex(item => item.id === action.task.id)
            if (index !== -1) {
                state[index] = action.task
            }
            return [...state]
        default:
            return [...state]
    }
}

export default tasksReducer

