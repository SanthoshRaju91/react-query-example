import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { messageAction } from '../../actions'

function Toast() {
    const { messages } = useSelector(state => state.message)
    const dispatch = useDispatch()

    useEffect(() => {        
        if (messages.length) {
            setTimeout(() => {
                
                dispatch(messageAction.close(messages[messages.length - 1]))
            }, 30000)
        }
    }, [messages, dispatch])

    const messagesComp = messages.map(message => (
        <div className="Toast" key={message.id}>
            <button onClick={() => dispatch(messageAction.close(message))}>Close</button>
            <h1>{message.title}</h1>
            <p>{message.text}</p>
        </div>
    ))

    return (
        <div className="Toast-Wrapper">
            {messagesComp}
        </div>
    )
}

export default Toast
