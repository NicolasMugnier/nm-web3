import { useEffect, StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FrameSDK from '@farcaster/frame-sdk';

function FarcasterFrameProvider({ children }) {
  useEffect(() => {
    const init = async () => {
      setTimeout(() => {
        FrameSDK.actions.ready()
      }, 500)
    }
    init()
  }, [])
  return <>{children}</>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <FarcasterFrameProvider>
      <App />
    </FarcasterFrameProvider>
  </StrictMode>
);
