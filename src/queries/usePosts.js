import { useQuery } from 'react-query'

import { getPosts } from '../services/posts'

export default function usePosts() {
    return useQuery('posts', getPosts, {
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false 
    })
}
