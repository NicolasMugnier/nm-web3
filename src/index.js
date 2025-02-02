import { useEffect, StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FrameSDK from '@farcaster/frame-sdk'

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
