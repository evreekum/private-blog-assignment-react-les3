import React, {useState} from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import BlogPost from "./pages/BlogpostPage";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import BlogPostsOverview from "./pages/BlogOverviewPage";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/Navigation";


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    // function loginClick() {
    //     toggleIsAuthenticated(true);
    //     console.log("Clicked")
    // }
    //
    // // function logoutClick() {
    // //     toggleIsAuthenticated(false);
    // // }

    return (
        <>
            <NavBar/>

            {isAuthenticated === true && <p>Je bent ingelogd</p>}
            {isAuthenticated === true ? <p>Je bent ingelogd</p> : <p>Je bent NIET ingelogd</p>}

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/login">
                    <Login auth={isAuthenticated}/>
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
                    <BlogPost/>
                </Route>
            </Switch>
        </>
    )
        ;
}

export default App;
