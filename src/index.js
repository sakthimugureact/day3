import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Task1 from './Tasks/Task1';
import Task2 from './Tasks/Task2';
import Task3 from './Tasks/Task3';
import Task4 from './Tasks/Task4';
import Task5 from './Tasks/Task5';
import Task6 from './Tasks/Task6';
import Task7 from './Tasks/Task7';
import Task8 from './Tasks/Task8';
import Task9 from './Tasks/Task9';
import Task10 from './Tasks/Task10';
import Mini1 from './MiniProjects/Mini1';
import Mini2 from './MiniProjects/Mini2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Task1/>
    <Task2/>
    <Task3/>
    <Task4/>
    <Task5/>
    <Task6/>
    <Task7/>
    <Task8/>
    <Task9/>
    <Task10/>
    <Mini1/>
    <Mini2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
