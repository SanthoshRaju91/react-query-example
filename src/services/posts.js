import fetch from './fetch'

export async function getPosts() {
    const { data } = await fetch.get('/posts')
    return data
}

export async function getPost(_, { postId }) {
    const { data } = await fetch.get(`/posts/${postId}`)
    return data
}

export async function savePost(post) {
    const { data } = await fetch.post('/posts', post)
    return data
}

export async function updatePost(postId, post) {
    const { data } = await fetch.put(`/posts/${postId}`, post)
    return data
}

export async function deletePost(postId) {
    const { data } = await fetch.delete(`/posts/${postId}`)
    return data
}
