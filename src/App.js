import './app.css'
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar"

const App = () => {
  return (
      <>
        <Topbar />  
        <div className='container'>
          <Sidebar />
          <div className="others">
            <span>Others</span>
          </div>   
        </div>

      </>
  );
}

export default App;
