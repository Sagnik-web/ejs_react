import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'

const App = () => <h1>Hello, EJS and React!</h1>;

createRoot(document.getElementById('root')).render(<App />)
  
