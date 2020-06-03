import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Home from 'pages/Home'
import Single from 'pages/Single'
import data from "data/notas.json";

const Routes = () => {
    return (
        <>
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/ofertas-fin-de-ano' component={Findeano} /> */}
            {data.map(post =>
                <Route key={post.id} exact path={'/' + post.slug} component={Single} />
            )}

        </>
    )
}

export default Routes
