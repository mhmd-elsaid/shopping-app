import data from "../../data/products.json";
import { ADD_ITEM , REMOVE_ITEM } from "../actions/actions-type";

const initState = {
  items : [...data],
  addedItems: [],
  total: 0
}
const itemsReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ITEM:
       state.items.map((item) => {
        if (item.id === action.payload.id) {
          if (item.quantity > 0) {
            state.total += item.price;      
            if (item.num === 0) {
              state.addedItems = [...state.addedItems , item]
              item.cost = item.price
            }      
            item.num++;
            item.quantity--;
            item.cost = item.num * item.price;            
          }
        }
        
      });
      return state = {...state}

    case REMOVE_ITEM:
      state.items.map((item) => {
        if (item.id === action.payload.id) {
          if (item.num > 0) {
            item.num--;
            item.quantity++;
            state.addedItems = state.addedItems.filter(
              e => e.id !== item.id);
              state.total -= item.price;              
          }
        }
      });
      return state = {...state};

    default:
      return state;
  }
};

export default itemsReducer;
