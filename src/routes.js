import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Home from 'pages/Home'

const Routes = () => {
    return (
        <Fragment>
            <Route exact path='/' component={Home} />
            {/*<Route path='/ofertas' component={Ofertas} />*/}
        </Fragment>
    )
}

export default Routes
