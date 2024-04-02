import { StoreType, StoreToastType, ActionType, Action } from './types.ts';

export const reducer = (state: StoreType, action: Action): StoreType => {
  switch (action.type) {
    case ActionType.SHOW_TOAST: {
      const storeToast: StoreToastType = {
        type: action.toastType,
        id: action.toastId,
        message: action.toastMessage,
      };

      return { ...state, toastsQuery: [...state.toastsQuery, storeToast] };
    }
    case ActionType.CLEAR_QUERY: {
      const toastsQuery = [...state.toastsQuery];

      toastsQuery.shift();

      return { ...state, toastsQuery: toastsQuery };
    }
    case ActionType.REMOVE_TOAST: {
      const filteredToastsQuery = state.toastsQuery
        .filter((toast) => toast.id !== action.toastId);

      return { ...state, toastsQuery: filteredToastsQuery };
    }
  }
};
