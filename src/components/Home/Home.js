import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resp => resp.json())
            .then(data => setPosts(data))
    }, []);
    console.log(posts);
    return (
        <div>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;