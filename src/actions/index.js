import * as Types from '../constants/ActionTypes'
import callApi from './../utils/callApi';
export const actFetchTasks = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        payload: products
    }
}

export const actFetchTasksRequest = () => {
    return dispatch => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchTasks(res.data));
        });
    };
}

export const actAddProduct = (task) => {
    return {
        type: Types.ADD_PRODUCT,
        payload: task
    }
}

export const actAddProductRequest = (task) => {
    return dispatch => {
        return callApi('products', 'POST', task).then(res => {
            dispatch(actAddProduct(res.data))
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        payload: id
    }
}

export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actSearchProduct = (keyword) => {
    return {
        type: Types.SEARCH,
        keyword
    }
}

export const actFilterProduct = (filter) => {
    return {
        type: Types.FILTER_TABLE,
        filter
    }
}

export const actUpdateStatusProduct = (id) => {
    return {
        type: Types.UPDATE_STATUS_TASK,
        id
    }
}

export const actSortProduct = (sort) => {
    return {
        type: Types.SORT,
        sort
    }
}

export const actGetProduct = (task) => {
    return {
        type: Types.EDIT_PRODUCT,
        task
    }
}

export const actGetProductRequest = (id) => {
    return dispatch =>  {
        return callApi(`/products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data))
        })
    }
}

export const actUpdateProduct = (task) => {
    return {
        type : Types.UPDATE_PRODUCT,
        task
    }
}

export const actUpdateProductRequest = (task) => {
    return dispatch =>  {
        return callApi(`/products/${task.id}`, 'PUT', task).then(res => {
            dispatch(actUpdateProduct(res.data))
        })
    }
}