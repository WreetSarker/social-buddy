import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const { id, title, body } = props.post;
    const history = useHistory();
    const detail = (id) => {
        const url = `/post/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h5>Title:{title}</h5>
            <p>{body}</p>
            <button onClick={() => detail(id)}>Details</button>
        </div>
    );
};

export default Post;