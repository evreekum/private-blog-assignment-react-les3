import React from "react";
import posts from '../data/posts.json';
import {useParams} from "react-router-dom/cjs/react-router-dom";


function BlogPost() {


    const {blogId} = useParams();
    const data = posts[blogId - 1];
    // Doet dit: const data = posts.find((post) => {
    // return post.id === blogId;
    console.log(data);
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
