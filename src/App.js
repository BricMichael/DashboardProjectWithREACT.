import './app.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar"
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';


const App = () => {
  return (
      <Router>
        <Topbar />  
        <div className='container'>
            <Sidebar />

            <Switch>
                <Route path='/users' exact component={UserList} />
                <Route path='/' exact component={Home} />
            </Switch>            
        </div>
      </Router>
  );
}

export default App;
