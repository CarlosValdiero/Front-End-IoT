import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import ListSensors from './pages/ListSensors';
import GraphSensor from './pages/GraphSensor';

const Routes = () =>{

    return(
        <BrowserRouter>
            <Route component={ListSensors} path="/" exact/>
            <Route component={GraphSensor} path="/sensor/:id"/>
        </BrowserRouter>
    );
}

export default Routes;