import { useMemo } from 'react';

import { dispatch, useStore } from '../core/store.ts';
import { ToastComponentsByKeysType, ToastType } from '../types.ts';

import { ActionType } from '../core/types.ts';
import DefaultToast from './DefaultToast.tsx';

interface ToastContainerProps {
  toasts: ToastType[];
}

const ToastContainer = ({ toasts }: ToastContainerProps) => {
  const { toastsQuery } = useStore();

  const toastComponents = useMemo(() => {
    const toastComponentsByKeys: ToastComponentsByKeysType = {
      ['default']: DefaultToast,
    }

    toasts.forEach((toast) => {
      toastComponentsByKeys[toast.type] = toast.ToastComponent;
    });

    return toastComponentsByKeys;
  }, [toasts]);

  const onClose = (id: string) => {
    dispatch({ type: ActionType.REMOVE_TOAST, toastId: id });
  };

  return (
    <div style={{ position: 'absolute', top: '25px', right: '25px' }}>
      {toastsQuery.map((toast) => {
        const ToastComponent = toastComponents[toast.type] ?? toastComponents['default'];

        const props = {
          message: toast.message,
          onClose: () => onClose(toast.id),
        };

        return <ToastComponent key={toast.id} {...props}/>
      })}
    </div>
  );
};

export default ToastContainer;
