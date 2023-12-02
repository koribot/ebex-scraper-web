import { store } from "./actions";
import { createContext, useContext } from "react";

export const StoreContext = createContext(store);
export const useStore = () => useContext(StoreContext);
