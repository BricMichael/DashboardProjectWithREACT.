import './app.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar"
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/users/User';
import NewUser from './pages/newPage/NewUser';
import ProductList from './pages/ProductList/ProductList';
import Product from './pages/Product/Product';
import NewProduct from './pages/newProduct/NewProduct';


const App = () => {
  return (
      <Router>
        <Topbar />  
        <div className='container'>
            <Sidebar />

            <Switch>
               
                <Route path='/newProduct' exact component={ NewProduct} />
                <Route path='/product/:productId' exact component={ Product } />
                <Route path='/products' exact component={ ProductList } />
                <Route path='/newUser' exact component={ NewUser } />
                <Route path='/user/:userId' exact component={ User } />
                <Route path='/users' exact component={ UserList } />
                <Route path='/' exact component={ Home } />
            </Switch>            
        </div>
      </Router>
  );
}

export default App;
