import 'es6-promise';
import 'isomorphic-fetch';
import store from "../store/configureStore"
function getProducts(data) {
    return {
        type: "GET_PRODUCTS", data
    }
}

export function getProductsReq() {

    return function (dispatch) {
        return fetch('http://592596b321cf650011fddcac.mockapi.io/api/products')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (data) {
                dispatch(
                    getProducts(data)
                );
            });
    };

}

export function deleteProduct(i) {

  let products = store.getState().productsReducer.products.slice();
        products.splice(i,1);

  return {
    type: "DELETE_PRODUCT", data: products
  }
}
