import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';
import Login from './Pages/Authentication/Login/Login';
import PlaceTour from './Pages/PlaceTour/PlaceTour';
import ManageAllTours from './Pages/ManageTours/ManageAllTours/ManageAllTours';
import AddPlace from './Pages/AddPlace/AddPlace';
import AllTours from './Pages/MyTours/AllTours/AllTours';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/myTour">
              <AllTours></AllTours>
            </PrivateRoute>
            <PrivateRoute path="/manageTours">
              <ManageAllTours></ManageAllTours>
            </PrivateRoute>
            <PrivateRoute path="/addTour">
              <AddPlace></AddPlace>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/placeTourOrder/:tourId">
              <PlaceTour></PlaceTour>
            </PrivateRoute>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
