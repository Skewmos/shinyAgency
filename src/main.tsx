import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './routes/Root';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './utils/provider/themeProvider';
import "./index.sass";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
