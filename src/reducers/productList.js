import * as types from "../constants/ActionTypes";

const initialState = [{
    id: 1,
    name: "pindakaas",
    price: 15,
    starred: false
  },
  {
    id: 2,
    name: "Avocados",
    price: 20,
    starred: false
  }
];

export default function products(state = initialState, action) {
  switch (action.type) {
    case types.STAR_PRODUCT:
      let products = [...state];
      let productIndex = products.findIndex(({id}) => id === action.productId);
      products[productIndex].starred = !products[productIndex].starred;

      return products;

    default:
      return state;
  }
}