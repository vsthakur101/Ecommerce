export const setData = (data)=>{
    return {
        type: 'GET_PRODUCTS',
        payload: data,
    }
}

export const setCartItemCount = (data)=>{
    return {
        type: 'SET_NUMBER_OF_ITEMS',
        payload: data,
    }
}


