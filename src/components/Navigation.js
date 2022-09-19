import React from 'react';
import {NavLink} from "react-router-dom";
import Button from "./Button";

function NavBar({isAuthenticated, logout}) {
    return (
        <div>
            <nav>
                <ul>
                    <NavLink exact to="/">
                        <li>
                            <Button
                                name="home"
                            ></Button>
                        </li>
                    </NavLink>

                    <li><NavLink to="/">home</NavLink></li>
                    {/*{!isAuthenticated &&}*/}
                    <li><NavLink to="/blogposts">blogposts</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;