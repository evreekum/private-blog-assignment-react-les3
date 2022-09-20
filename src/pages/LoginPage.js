import React from "react";
// import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {Link} from "react-router-dom";
import Button from "../components/Button";


function Login({login}) {

    return (

        <div>
            <h1>login pagina</h1>
            <h3>druk op de knop om in te loggen</h3>
            <Link exact to="/blogposts">
                <Button
                    name="inloggen"
                    handleClick={login}/>
            </Link>
        </div>
    )
}

export default Login;

// First Try:
// function Login() {
//
//     const history = useHistory();
//
//     function handleClick() {
//         history.push("/blogposts")
//     }
//
//     return (
//
//         // <>
//         //     <h1>login pagina</h1>
//         //     <h3>druk op de knop om in te loggen</h3>
//         //     <button
//         //     type="button"
//         //     onClick={handleClick}>
//         //         inloggen
//         //     </button>
//         // </>
//
//         <div>
//             <h1>login pagina</h1>
//             <h3>druk op de knop om in te loggen</h3>
//             <Link exact to="/blogposts">
//                 <button
//                     type="button"
//                     onClick={handleClick}>
//                     inloggen
//                 </button>
//             </Link>
//         </div>
//     )
// }
//
// export default Login;
