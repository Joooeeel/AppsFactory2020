import React from 'react';

const post =({postTitle, author, children})=>{
    return(
        <ul>
            <li>{postTitle}</li>
            <li>{author}</li>
            <li>{children}</li>
        </ul>
    );
};

export default post;