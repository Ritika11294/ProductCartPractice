import "./App.css";
import { useEffect, useReducer } from "react";
import axios from "axios";
import { cartReducer } from "./reducers/cartReducer";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });
  //console.log(state);

  const getProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");

    // console.log(data);
    dispatch({
      type: "ADD_PRODUCTS", //populate products array
      payload: data.products,
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{display:"flex"}}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
