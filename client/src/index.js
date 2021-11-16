import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import {BrowserRouter as Router} from "react-router-dom";
=======
import { BrowserRouter as Router } from 'react-router-dom';
>>>>>>> dev
import App from './components/App';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
