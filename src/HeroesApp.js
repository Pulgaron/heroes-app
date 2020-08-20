import React from 'react'
import { AppRouter } from './routers/AppRouter'
import { authReducer } from './auth/authReducer'
import { useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { useEffect } from 'react'

const init = () =>{
    return JSON.parse(localStorage.getItem('user')) || {
        logged: false
    }
}

export const HeroesApp = () => {

    

    const [user, dispatch ] =  useReducer(authReducer, {}, init)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    
    }, [user])

    return (
        <AuthContext.Provider value = {{user, dispatch}}>

            <AppRouter/>

        </AuthContext.Provider>
    )
}
