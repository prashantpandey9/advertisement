import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Allads from './pages/Allads/Allads';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/register" component={Signup}/>
          <Route path="/signin" component={Login}/>
          <Route path="/ads" component={Allads} />
          <Route path="/" component={Home}/>
          

        </Switch>
      </BrowserRouter>
  );
}

export default App;
