import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Allads from './pages/Allads/Allads';
import PublishForm from './pages/PublishForm/PublishForm';
import EditForm from './pages/EditForm/EditForm';

function App() {
  if (localStorage.getItem("auth")==null){
    localStorage.setItem("auth", false)
  }
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/register" component={Signup}/>
          <Route path="/signin" component={Login}/>
          <Route path="/ads" component={Allads} />
          <Route path="/add/ads" component={PublishForm} />
          <Route path="/edit/ads/:id" component={EditForm}/>
          <Route path="/" component={Home}/>
          

        </Switch>
      </BrowserRouter>
  );
}

export default App;
