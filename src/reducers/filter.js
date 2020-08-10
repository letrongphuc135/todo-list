import * as types from '../constants/ActionTypes'
let initialState = {
    name: '',
    status: -1
}
const filter = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_TABLE:
            return action.filter
        default:
            return state;
    }
}

export default filter;