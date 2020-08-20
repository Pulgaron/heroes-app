import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext)

    const lastPath = localStorage.getItem('lastPath') || '/'

    const handleClick = () =>{
        //history.push('/')
        
        const action = {
            type: types.login,
            payload: {
                name: "Oscar"
            }
        }
        
        dispatch(action)
        history.replace(lastPath)
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={handleClick}
            >
                Login
            </button>
        </div>
    )
}
