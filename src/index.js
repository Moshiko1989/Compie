import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import ItemStore from './store/ItemStore';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

const store = { ItemStore }
ReactDOM.render(
    <Provider {...store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

// const API_KEY = `
// AIzaSyBzRUxqyrsGymtM8M69vpodYwGq7hUZrlI
// `;