import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import InvoicePageList from './InvoicePageList';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <InvoicePageList />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);
