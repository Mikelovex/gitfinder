import React from 'react'

import {Switch, Route} from 'react-router-dom'

import User from '../pages/User'
import Login from '../pages/Login'
import Repositories from '../pages/Repositories'
import Followers from '../pages/Followers'
import Following from '../pages/Following'


function Routes() {
    return(
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/user' component={User} />
            <Route path='/repositories/:id' component={Repositories} />
            <Route path='/followers/:id' component={Followers} />
            <Route path='/following/:id' component={Following} />
        </Switch>
    )   
}

export default Routes