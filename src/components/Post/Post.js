import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const { id, title, body } = props.post;
    return (
        <div>
            <h5>Title:{title}</h5>
            <p>{body}</p>

            <Link to={`/post/${id}`}><button>Detail</button></Link>
        </div>
    );
};

export default Post;