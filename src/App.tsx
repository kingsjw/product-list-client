import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { theme } from './assets/styles/theme'
import { ThemeProvider } from 'styled-components';
import Header from './components/common/Header';
import NotFound from './components/common/NotFound';
import Home from './pages/Home';
import Product from './pages/Product';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/product' component={Product}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
