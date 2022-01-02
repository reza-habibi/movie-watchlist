import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "swiper/css/bundle";
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from './components/theme/ThemeContext';
import Background from './components/theme/Background';
import Toggle from './components/theme/ThemeToggle';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider>
        <Background>
          <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
            <Toggle />
          </div>

          <Provider store={store}>
            <App />
          </Provider>
        </Background>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
