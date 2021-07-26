import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  RouteComponentProps,
} from 'react-router-dom';

import Homepage from './homepage/homepage';
import {RouteOne} from './route-one/route-one';
import {ApiCallDemo} from './api-call-demo/api-call-demo';
import {Users} from './users/users';

interface IRoute {
  path: string;
  navName: string;
  component: React.ComponentType<any>
  | React.ComponentType<RouteComponentProps<any>>;
}

const routes: IRoute[] = [
  {path: '/', navName: 'Hello', component: Homepage},
  {path: '/routeone', navName: 'Route One', component: RouteOne},
  {path: '/apicall', navName: 'API Call', component: ApiCallDemo},
  {path: '/users', navName: 'Users', component: Users},
];

/**
 * Render main page
 * @return {JSX.Element} the main page component
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div className="navbar">
            <ul className="navbar-list" >
              {routes.map((value, index) => (
                <li key={index}>
                  <NavLink exact to={value.path} activeClassName="active" >
                    {value.navName}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Switch>
              {routes.map((value, index) => (
                <Route key={index} exact
                  path={value.path} component={value.component} />
              ))}
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
