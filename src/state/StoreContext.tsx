import { createContext, useContext, useReducer, type Dispatch, type ReactNode } from 'react';
import { reducer } from './reducer';
import { initialState } from './initialState';
import type { Action, State } from '../types';

interface StoreValue { state: State; dispatch: Dispatch<Action> }
const Store = createContext<StoreValue | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
}
export function useStore(): StoreValue {
  const ctx = useContext(Store);
  if (!ctx) throw new Error('useStore must be used inside <StoreProvider>');
  return ctx;
}
