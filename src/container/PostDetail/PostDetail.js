import React, { useContext } from 'react'
import { PostContext } from '../../context/post'
import Post from './Post'

function PostDetail() {
    const { postId } = useContext(PostContext)

    return (
        <div>
            {postId === -1 && <h2>Select a Post to view</h2>}

            {postId > 0 && <Post postId={postId} />}
        </div>
    )
}

export default PostDetail
