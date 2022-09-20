import React from "react";
import {Link} from "react-router-dom";
import "../App.css";


function BlogPostsOverview({posts}) {
    // console.log(posts);

    return (

        <div className="blogs-overview-page">
            <h1>Blogoverzicht pagina</h1>

            <p>aantal blogposts: {posts.length}</p>

            <ol>
                {posts.map(post =>

                    <li>
                        <Link key={post.id} to={"/blogposts/" + post.id}>
                            <p>{post.title}</p>
                        </Link>
                    </li>
                )
                }
            </ol>
        </div>

    );
}

export default BlogPostsOverview;


// <ul>
//     {posts.map(post =>
//         <Link key={post.id} to={"/blogposts/" + post.id}>
//             <li><p>{post.title}</p></li>
//         </Link>
//     )}
// </ul>