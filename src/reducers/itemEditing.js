import * as types from '../constants/ActionTypes'
let initialState = {
    id: '',
    name: '',
    status: false
};

const itemEditing = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_PRODUCT:
            return action.task
        default:
            return state
    }
}

export default itemEditing