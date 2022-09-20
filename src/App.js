import React, {useState} from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import BlogPost from "./pages/BlogpostPage";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import BlogPostsOverview from "./pages/BlogOverviewPage";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/Navigation";
import posts from "./data/posts.json"


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    function loginClick() {
        toggleIsAuthenticated(true);
    }

    function logoutClick() {
        toggleIsAuthenticated(false);
    }

    return (
        <>
            <NavBar isAuthenticated={isAuthenticated} logout={logoutClick}/>

            {/*{isAuthenticated === true && <p>Je bent ingelogd</p>}*/}
            {/*{isAuthenticated === true ? <p>Je bent ingelogd</p> : <p>Je bent NIET ingelogd</p>}*/}

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/login">
                    <Login
                        login={loginClick}
                    />
                </Route>


                {/*<Route exact path=>*/}
                {/*    {isAuthenticated === true ? <BlogPosts/> : <Redirect to="/login"/>}*/}

                {/*</Route>*/}

                <PrivateRoute
                    exact path="/blogposts"
                    auth={isAuthenticated}>
                    <BlogPostsOverview/>
                </PrivateRoute>

                {/*<Route exact path="/blogposts">*/}
                {/*    <BlogPostsOverview/>*/}
                {/*</Route>*/}

                <Route path="/blogposts/:blogId">
                    <BlogPost
                        posts={posts}
                    />
                </Route>
            </Switch>
        </>
    )
        ;
}

export default App;
