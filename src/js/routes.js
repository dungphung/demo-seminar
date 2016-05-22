var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var useRouterHistory = ReactRouter.useRouterHistory;
var createHashHistory = require('react-router/node_modules/history').createHashHistory;
var React = require('react');

var appHistory = useRouterHistory(createHashHistory) ({
    queryKey: false
});


var Header = require('./components/App');
var Topic= require('./components/Topic');
var ImageDetail = require('./components/image-detail');

var Routes = (
    <Router history={appHistory} >
          <Route path="/" component={Header}>
              <Route path="topics/:id" component={Topic} />
              <Route path="images/:id" component={ImageDetail} />
          </Route>
    </Router>
);


module.exports = Routes;
