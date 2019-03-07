import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Login from "./components/Auth/login";
import Register from "./components/Auth/register";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

const Root=()=>(
    <Router>
    <Switch>
    <Route path="/helo" component={App}/>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>

   
    </Switch>
    </Router>
)

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.unregister();
