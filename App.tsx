import { ToastContainer, toast } from '../src/lib/ui-agnostic-toast';
import ToastError from './components/ToastError';
import ToastWarn from './components/ToastWarn.tsx';
import { ToastType } from './lib/ui-agnostic-toast/types.ts';

const toasts: ToastType[] = [
  { type: 'error', ToastComponent: ToastError },
  { type: 'warn', ToastComponent: ToastWarn },
];

function App() {
  return (
    <div>
      <button onClick={() => toast('error', 'Test Message Error')} >Show Toast ERROR</button>
      <button onClick={() => toast('warn', 'Test Message Warn')} >Show Toast WARN</button>
      <ToastContainer toasts={toasts}/>
    </div>
  )
}

export default App
