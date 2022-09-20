import React from "react";
import {Redirect, Route} from "react-router-dom";
import BlogPostsOverview from "../pages/BlogOverviewPage";
import posts from "../data/posts.json";

function PrivateRoute({auth, ...rest}) {

    return (
        <Route {...rest}>
            {auth === true ? <BlogPostsOverview posts={posts}/> : <Redirect to="/login"/>}

        </Route>

    );
}

export default PrivateRoute;