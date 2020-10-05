import React, { useState } from 'react'

export const UserContext = React.createContext()

export function UserContextProvider(props) {
    const [ roles, setRoles ] = useState([])

    return (
        <UserContext.Provider value={{ roles, setRoles }}>
            {props.children}
        </UserContext.Provider>
    )
}
