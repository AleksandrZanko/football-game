import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import { rootReducer } from './redux/rootReducer';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, compose(
	applyMiddleware(
		thunk
	),
	(window as any).window.__REDUX_DEVTOOLS_EXTENSION__ && (window as any).window.__REDUX_DEVTOOLS_EXTENSION__()
	//для диспатча асинхронных событий
));

export type AppDispatch = typeof store.dispatch;

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
