import React from "react";
import {Link} from "react-router-dom";
import "./src/App.css";


function BlogPosts({posts}) {
    console.log(posts);

    return (

        <div className="blogs-overview-page">
            <h1>Blog overview pagina</h1>

            <p>aantal blogposts:{posts.length}</p>

            <ul>
                {posts.map(post =>
                    <Link key={post.id} to={"/blogposts/blog/" + post.id}>
                        <li><p>{post.title}</p></li>
                    </Link>
                )}
            </ul>
        </div>

    );
}

export default BlogPosts;