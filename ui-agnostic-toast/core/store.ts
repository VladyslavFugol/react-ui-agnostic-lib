import { useState, useEffect } from 'react';

import { reducer } from './reducer.ts';
import { StoreType, Action } from './types.ts';

const listeners: Array<(state: StoreType) => void> = [];
let mainStore: StoreType = { toastsQuery: [] };

export const dispatch = (action: Action) => {
  mainStore = reducer(mainStore, action);
  listeners.forEach((listener) => {
    listener(mainStore);
  });
};

export const useStore = () => {
  const [store, setStore] = useState<StoreType>(mainStore);

  useEffect(() => {
    listeners.push(setStore);
  }, []);

  return { ...store };
}
