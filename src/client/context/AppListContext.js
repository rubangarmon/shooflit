import { createHook, createStore } from "react-sweet-state";
// import api from "../api";

// define store initial state
const initialState = {
  loading: false,
  error: null,
  items: ["Joe Due", "Luke Skykewalker", "Gandalf"],
};

const addItem = (item) => ({ getState, setState }) => {
  setState({ items: [...getState().items, item] });
};

const setItems = (items) => ({getState, setState}) => {
  setState({items: items});
  console.dir(getState().items)
}

// define the actions that mutate the state
const actions = {
  addItem,
  setItems
};

// create a store type
const Store = createStore({ initialState, actions });
export default Store;
