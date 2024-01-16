import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { Auth0Provider } from '@auth0/auth0-react';
import {
  RecoilRoot,
} from 'recoil';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <Auth0Provider
        domain="dev-tudnncp4h8zetuik.us.auth0.com"
        clientId="UfZgcFab4ZROv4D4nR3whm3nOHEV9fIf"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Auth0Provider>
    </RecoilRoot>
  </React.StrictMode>,
)
