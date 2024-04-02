export type StoreToastType = {
  type: string;
  id: string;
  message: string;
};

export type StoreType = {
  toastsQuery: StoreToastType[];
};

export enum ActionType {
  SHOW_TOAST,
  REMOVE_TOAST,
  CLEAR_QUERY,
}

export type Action =
  | { type: ActionType.SHOW_TOAST, toastType: string, toastId: string, toastMessage: string }
  | { type: ActionType.REMOVE_TOAST, toastId: string }
  | { type: ActionType.CLEAR_QUERY }
