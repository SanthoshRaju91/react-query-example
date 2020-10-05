import React, { useContext } from 'react'
import { PostContext } from '../../context/post';
import usePosts from '../../queries/usePosts';

function Post({ post }) {
    const { dispatch } = useContext(PostContext)
    
    return (
        <div className="Post-Preview">
            <button className="Link" onClick={() => dispatch({ type: 'fetch', payload: post.id})}>
                <h4 className="">{post.title}</h4>
            </button>
            <span className="">Posted by user: {post.userId}</span>
        </div>
    )
}

function Posts({ posts }) {
    return (
        <React.Fragment>            
            {posts.map(post => {
                return <Post key={post.id} post={post}/>
            })}
        </React.Fragment>
    )
}


function PostList() {
    const { isFetching, data, error } = usePosts()

    return (
        <div>
            {isFetching && (<div>Loading...</div>)}

            {!isFetching && <Posts posts={data} />}

            {!isFetching && error && (<div>Errored</div>)}
        </div>
    );
}

export default PostList;
