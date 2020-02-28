import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <ToastContainer autoClose={5000} />
    </Provider>    
  );
}

export default App;
