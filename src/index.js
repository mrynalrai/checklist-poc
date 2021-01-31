import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import appReducer from './store/reducers/reducer';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; 

// const theme = createMuiTheme({
//   palette: {
//      type: 'dark'
//   }
// });

const store = createStore(appReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <MuiThemeProvider theme = { theme }> */}
        <App />
      {/* </MuiThemeProvider> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
