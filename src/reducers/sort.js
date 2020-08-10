import * as types from '../constants/ActionTypes'
let initialState = {
    by: '',
    value: -1
}
const sort = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT:
            return action.sort;
        default:
            return state;
    }
}

export default sort;