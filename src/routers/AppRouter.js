import React from 'react'
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom'
import { LoginScreen } from '../components/LoginScreen/LoginScreen'
import { DashboardRouters } from './DashboardRouters'
import { PrivateRoute } from './PrivateRoute'
import { useContext } from 'react'
import { AuthContext } from '../auth/authContext'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {

    const {user} = useContext(AuthContext)

    return (
        <Router>
            <div>

                    <Switch>
                        <PublicRoute 
                            path="/login" 
                            component={LoginScreen}
                            isAuth={user.logged}
                            />
                        <PrivateRoute 
                            path="/" 
                            component={DashboardRouters}
                            isAuth={user.logged}
                        />
                    </Switch>
            </div>
        </Router>
    )
}
