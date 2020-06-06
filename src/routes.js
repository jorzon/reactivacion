import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Home from 'pages/Home'
import Single from 'pages/Single'
import VerTodo from 'pages/VerTodo'
import data from "data/notas.json";
import SingleComunicado from 'pages/SingleComunicado'
import data2 from "data/medidas.json";

const Routes = () => {
    return (
        <Fragment>
            <Route exact path='/' component={Home} />
            <Route exact path='/ver-todo' component={VerTodo} />
            {data.map(post =>
                <Route key={post.id} exact path={'/notas' + post.slug} component={Single} />
            )}
            {data2.map(post =>
                <Route key={post.id} exact path={'/comunicados' + post.slug} component={SingleComunicado} />
            )}
        </Fragment>
    )
}

export default Routes
