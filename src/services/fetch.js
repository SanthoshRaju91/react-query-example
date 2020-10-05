import axios from 'axios'
import { messageAction } from '../actions'

import AppConfig from '../config'
import { getStoreDispatch } from '../store'

axios.interceptors.request.use(
    config => {
        config.baseURL = AppConfig.API_URL
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    response => {
        const dispatch = getStoreDispatch()
        dispatch(messageAction.append({
            id: 'response-success',
            title: 'Success response',
            text: 'Got response from backend server. Hurrah!!!'
        }))
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export default axios
