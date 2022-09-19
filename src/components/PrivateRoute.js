import React from "react";
import Redirect from "react-router-dom/es/Redirect";
import {Route} from "react-router-dom";


function PrivateRoute({auth, children, ...rest}) {

    return (
        <Route {...rest}>
            {auth === true ? {children} : <Redirect to="/login"/>}

        </Route>

    );

}

export default PrivateRoute;