import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthRouter from './hoc/AuthRouter';
import routers from './routers';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        { routers.map(route => {
          if (route.private) {
            return (
              <AuthRouter key={route.id}>
                <Route exact key={route.id} {...route} />
              </ AuthRouter>
            )
          }
          return <Route exact key={route.id} {...route} />
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
