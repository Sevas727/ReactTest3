
export default function (state = {}, action) {

    switch (action.type){
      case 'GET_PRODUCTS':
            return {...state, products: action.data}
      case 'DELETE_PRODUCT':
            return {...state, products: action.data}
        default:
            return state
    }
}
