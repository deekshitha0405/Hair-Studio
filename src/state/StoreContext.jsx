import { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducer.js';
import { initialState } from './initialState.js';
const Store = createContext(null);
export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
}
export const useStore = () => useContext(Store);
