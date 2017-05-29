require('es6-promise').polyfill();
require('isomorphic-fetch');

function getProducts2(data) {
    console.log("getProducts2",data);
    return {
        type: "GET_PRODUCTS", data
    }
}



export function getProducts() {

    return function (dispatch) {
        return fetch('http://592596b321cf650011fddcac.mockapi.io/api/products')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (stories) {
                console.log("stories", stories);
                dispatch(getProducts2(stories));
            });
    };

}
/*
    return {
        type: "GET_PRODUCTS", data: {rer: "dww"}
    };
*/
/*
    fetch('http://592596b321cf650011fddcac.mockapi.io/api/products')
        .then(res => {
            console.log("res",res);
            console.log("data: res.json()", res.json());
            return {
                type: "GET_PRODUCTS", data: res.json()
            }

        })
        .catch(e => console.log("e",e));

*/
 //   return promise;
 //   fetch('http://592596b321cf650011fddcac.mockapi.io/api/products')
/*
    fetch('http://592596b321cf650011fddcac.mockapi.io/api/products')
        .then(function(response) {
            console.log("response",response);

        })
        .catch( alert );

};
*/