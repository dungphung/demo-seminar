var Routes = require('./routes');
var React = require('react');
var ReacDOM = require('react-dom');
var AppAPI = require('./utils/AppAPI');
AppAPI.get('topics/defaults');
ReacDOM.render(
      Routes,
      document.getElementById('app')
);
