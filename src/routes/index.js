import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Signin from '../pages/Signin';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
    return (
        <BrowserRouter>

            <Switch>
                
                <Route 
                path="/" 
                component={ Signin } 
                exact />

                <Route 
                path="/dashboard" 
                component={ Dashboard } />
                

            </Switch>

        </BrowserRouter>
    )
}