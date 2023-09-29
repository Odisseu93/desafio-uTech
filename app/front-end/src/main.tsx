import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalsStyles } from './styles/GlobalStyles.tsx';
import { ToastContainer } from './libs/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalsStyles />
		<App />
		<ToastContainer  />
	</React.StrictMode>,
);
