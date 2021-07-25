import firebase from '../../utils/firebase'

const productReducer = (state =null, action)=>{
    switch(action.type){
        case 'GET_PRODUCTS':
            state = action.payload;            
            return state ? state : null;
        case 'SET_NUMBER_OF_ITEMS':
            state.cartItemCount = action.payload;
            return state ? state.cartItemCount : 0;
        default:
            return false

    }
}
export default productReducer;