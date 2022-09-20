import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";

// ReactDOM.render(
//     <Router>
//         <React.StrictMode>
//             <App/>
//         </React.StrictMode>
//     </Router>,
//     document.getElementById('root')
// );

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>,

document.getElementById('root')
);