//@vendors
const React = require('react');
const Route = require('react-router/lib/Route');

//@views
const { Login } = require('../src/components/login/login');

//@routes
const getRoutes = function() {
    return (
        <Route path="login" component={Login}/>
    )
}