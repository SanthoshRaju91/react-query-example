import React, { useReducer } from 'react'

export const initialState = -1

export const reducer = (state, action) => {
    switch (action.type) {
        case 'fetch':
            return action.payload
        
        default:
            return state
    }
}

export const PostContext = React.createContext()

export function PostContextProvider(props) {
    const [ state, dispatch ] = useReducer(reducer, initialState)

    return (
        <PostContext.Provider value={{ postId: state, dispatch }}>
            {props.children}
        </PostContext.Provider>
    )
}
