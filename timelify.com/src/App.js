
import './App.css';
import {Navbar} from "./navbar/navbar"
import { AllRoutes } from './Allroutes/Allroutes';
import { Navbarm } from './navbar/navbar_mobile';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <AllRoutes/>
    </div>
  );
}

export default App;
