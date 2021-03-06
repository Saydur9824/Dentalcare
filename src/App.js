import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Dentists from './components/Dentists/Dentists';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import SingleService from './components/SingleService/SingleService';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
       <Router>
          <Header></Header>
          <Switch>
            <Route exact path = '/'>
              <Home></Home>
            </Route>
            <Route path = '/home'>
              <Home></Home>
            </Route>
            <Route path = '/about'>
              <About></About>
            </Route>
            <Route path = '/services'>
              <Services></Services>
            </Route>
            <PrivateRoute path = '/dentists'>
              <Dentists></Dentists>
            </PrivateRoute>
            <PrivateRoute path = '/singleService/:serviceId'>
              <SingleService></SingleService>
            </PrivateRoute>
            <Route path = '/login'>
              <Login></Login>
            </Route>
            <Route path = '/registrer'>
              <Register></Register>
            </Route>
            <Route path = '*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
