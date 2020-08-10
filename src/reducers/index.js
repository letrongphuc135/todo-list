import tasksReducer from "./task";
import search from './search'
import filter from './filter'
import sort from './sort'
import itemEditing from './itemEditing'
const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    tasks: tasksReducer,
    search,
    filter,
    sort,
    itemEditing
})
export default rootReducer;