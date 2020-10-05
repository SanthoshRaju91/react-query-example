import { getType } from 'typesafe-actions'

import { messageAction } from '../../actions'

export function message(state = { messages: [] }, action) {
    switch (action.type) {
        case getType(messageAction.append):
            return {
                messages: [
                    ...state.messages.filter(message => message.title !== action.payload.title),
                    action.payload
                ]
            }

        case getType(messageAction.close):
            return {
                messages: [
                    ...state.messages.filter(message => message.id !== action.payload.id)
                ]
            }

        default:
            return state
    }
}
