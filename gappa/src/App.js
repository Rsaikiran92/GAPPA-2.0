import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Sidebar1 from './Components/Sidebar/Sidebar1';
import AllRoutes from './Pages/AllRoutes';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='dashboard'>
        <Sidebar1/>
        <AllRoutes/>
      </div>
    </div>
  );
}

export default App;
