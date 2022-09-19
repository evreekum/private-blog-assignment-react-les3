import React from "react";
import {Link} from "react-router-dom";


function Login() {

    return (

        <>
            <h1>login pagina</h1>
            <p>druk op de knop om in te loggen</p>
            <button>
                <Link to="/"></Link>
                inloggen
            </button>
        </>

    )
}

export default Login;