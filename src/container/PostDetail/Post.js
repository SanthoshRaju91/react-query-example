import React from 'react'
import usePost from '../../queries/usePost'

function Post(postId) {
    const { isFetching, data } = usePost(postId)
    return (
        <div className="Post-Detail">
            {isFetching && <div>Loading...</div>}

            {!isFetching && (
                <React.Fragment>
                    <h1>{data.title}</h1>
                    <h5>Posted by: {data.userId} | Post ID: {data.id}</h5>
                    <p>{data.body}</p>
                </React.Fragment>
            )}
        </div>
    )
}

export default Post
