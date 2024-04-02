import { ToastComponentProps } from '../types.ts';

const DefaultToast = ({ message, onClose }: ToastComponentProps) => {
  return (
    <div style={{ backgroundColor: 'white', width: '200px', height: '50px' }}>
      {message}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default DefaultToast;
