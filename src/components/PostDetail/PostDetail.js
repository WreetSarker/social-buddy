import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = (props) => {
    const { id } = useParams();
    const [postDetail, setPostDetail] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(resp => resp.json())
            .then(data => setPostDetail(data));
    }, [])
    return (
        <div>
            <h3>Title: {postDetail.title}</h3>
            <p>Description: {postDetail.body}</p>
        </div>
    );
};

export default PostDetail;