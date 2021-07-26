const initialState = []

const productReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'GET_PRODUCTS':
            const product = action.payload;            
            return [...state,product];
        case 'SET_NUMBER_OF_ITEMS':
            state.cartItemCount = action.payload;
            return state ? state.cartItemCount : 0;
        case 'DELETE_CART_ITEM':
            const newList = state.filter((item)=>{
                return item.Id !== action.payload
            });
            return state = [...newList]
        default:
            return state

    }
}
export default productReducer;