import { useQuery } from 'react-query'

import { getPost } from '../services/posts'

export default function usePost(postId) {
    return useQuery(['post', postId], getPost, {
        refetchOnReconnect: false,
        refetchOnWindowFocus: false
    })
}
