let AppConfig = undefined

if (process.env.NODE_ENV === 'prod') {
    AppConfig = require('./config.prod').default
} else if (process.env.NODE_ENV === 'dev') {
    AppConfig = require('./config.dev').default
} else {
    AppConfig = require('./config.local').default
}

export default AppConfig
