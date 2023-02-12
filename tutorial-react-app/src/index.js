// Following tutorial https://www.taniarascia.com/getting-started-with-react/
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css'

/* const root = ReactDOM.createRoot(document.getElementById('root'));

const header1 = <h1>Hello React!</h1>
const header2 = (
  <ul className="list">
    <li>List 1</li>
    <li>List 2</li>
    <li>List 3</li>
  </ul>
);

root.render(header1);
root.render(header2);
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);