import React, { useContext, useEffect } from 'react'

import PostList from '../PostList'
import PostDetail from '../PostDetail'
import { UserContext } from '../../context/user'
import Header from '../../components/Header/Header'

function Landing() {
    const { setRoles } = useContext(UserContext)

    useEffect(() => {
        setRoles(['operator', 'single-merchant-search'])
    }, [setRoles])

    return (
        <div className="Landing">
            <div className="App">
                <Header />                
                <main className="Main">
                    <section className="Posts">
                        <PostList />
                    </section>
                    <section className="Post">
                        <PostDetail />
                    </section>
                </main>          
            </div>
        </div>
    )
}

export default Landing
