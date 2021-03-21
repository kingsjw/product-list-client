import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { theme } from './assets/styles/theme'
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/'>
            <div className="App"></div>
          </Route>
          <Redirect path='*' to='/'/>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
