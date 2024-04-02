import { ToastComponentProps } from '../lib/ui-agnostic-toast/types.ts';

const ToastWarn = ({ message, onClose }: ToastComponentProps) => {
  return (
    <div style={{ backgroundColor: 'yellow', width: '200px', height: '50px' }}>
      {message}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ToastWarn;
