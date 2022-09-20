import React from "react";
// import posts from '../data/posts.json';
import {useParams} from "react-router-dom/cjs/react-router-dom";

// Blog component import posts from app.js with all the data of the blogs
function BlogPost({posts}) {

    //blogId links the dynamic url given in BlogOverviewPage.js
    const {blogId} = useParams();
    //data takes the id and extract one because the array with data starts on 0(so blog/1=data[0])
    const data = posts[blogId - 1];
    // Doet dit: const data = posts.find((post) => {
    // return post.id === blogId;

    return (
        <>
            <article>
                <h1>{data.title}</h1>
                <h3>{data.date}</h3>
                <p>{data.content}</p>
            </article>
        </>
    );
}

export default BlogPost;
