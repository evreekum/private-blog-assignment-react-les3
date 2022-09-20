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
                            />
                        </li>
                    </NavLink>
                    {!isAuthenticated &&
                    <NavLink to="/login">
                        <li>
                            <Button
                                name="login"
                            />
                        </li>
                    </NavLink>}
                    {isAuthenticated &&
                    <NavLink to="/blogposts">
                        <li>
                            <Button
                                name="blogs"
                            />
                        </li>
                    </NavLink>}
                    {isAuthenticated &&
                    <NavLink to="/">
                        <li>
                            <Button
                                name="logout"
                                handleClick={logout}
                            ></Button>
                        </li>
                    </NavLink>}

                </ul>
            </nav>
        </div>
    );
}

export default NavBar;