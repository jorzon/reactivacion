import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Home from 'pages/Home'
import Single from 'pages/Single'

const Routes = () => {
    return (
        <Fragment>
            <Route exact path='/' component={Home} />
            <Route path='/single' component={Single} />
        </Fragment>
    )
}

export default Routes
