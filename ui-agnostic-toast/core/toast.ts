import { dispatch } from './store.ts';
import { ActionType } from './types.ts';

export function toast (type: string, message?: string) {
  dispatch({
    type: ActionType.SHOW_TOAST,
    toastType: type,
    toastMessage: message ?? '',
    toastId: String(Date.now())
  });
}
