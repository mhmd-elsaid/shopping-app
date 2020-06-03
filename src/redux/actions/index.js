import { ADD_ITEM, REMOVE_ITEM } from "./actions-type";

export const addItem = (payload) => ({
  type: ADD_ITEM,
  payload,
});

export const removeItem = (payload) => ({
  type: REMOVE_ITEM,
  payload,
});
