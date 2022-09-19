import React, { useState } from 'react';
import './App.css';
import {Switch, Route, NavLink} from "react-router-dom";
import BlogPost from "./pages/BlogpostPage";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import posts from "./data/posts.json";
import BlogPosts from "./pages/BlogOverviewPage";
import Redirect from "react-router-dom/es/Redirect";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <>
        <nav>
            <ul>
                <li><NavLink to="/">home</NavLink></li>
                <li><NavLink to="/blogposts">blogposts</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/">uitloggen</NavLink></li>
            </ul>
        </nav>

        {isAuthenticated === true && <p>Je bent ingelogd</p>}
        {isAuthenticated === true ? <p>Je bent ingelogd</p> : <p>Je bent NIET ingelogd</p>}

        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route path="/login">
                <Login/>
            </Route>

            {/*<Route exact path=>*/}
            {/*    {isAuthenticated === true ? <BlogPosts/> : <Redirect to="/login"/>}*/}

            {/*</Route>*/}

            <PrivateRoute
                exact path="/blogposts"
                auth={isAuthenticated}>
                <BlogPosts/>
            </PrivateRoute>

            <Route path="/blogposts/blog/:blogId">
                <BlogPost/>
            </Route>
        </Switch>
    </>
  );
}

export default App;
