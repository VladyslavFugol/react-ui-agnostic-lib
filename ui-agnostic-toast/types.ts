import { ComponentType } from 'react';

export interface ToastComponentProps {
  message: string;
  onClose: () => void;
}

export type ToastType = {
  type: string;
  ToastComponent: ComponentType<ToastComponentProps>;
}

export type ToastComponentsByKeysType = {
  [key: string]: ComponentType<ToastComponentProps>;
}

