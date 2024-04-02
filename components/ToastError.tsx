import { ToastComponentProps } from '../lib/ui-agnostic-toast/types.ts';

const ToastError = ({ onClose, message }: ToastComponentProps) => {
  return (
    <div style={{ backgroundColor: 'red', width: '200px', height: '50px' }}>
      {message}
      <button onClick={onClose} >Close</button>
    </div>
  )
};

export default ToastError;
