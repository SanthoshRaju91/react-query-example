import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/user";

function Header() {
    const { roles } = useContext(UserContext)

    useEffect(() => {
        console.log(roles)
    }, [roles])

    return (
        <header className="App-header">
            <h2>React query example</h2>
        </header>
    );
}

export default Header;
