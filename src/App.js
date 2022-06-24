import logo from './logo.svg';
import './App.css';
import Headbar from './screens/header';
import SideNavBar from './screens/sidebar';
import Orders from './screens/orders';
import Pending from './screens/pendingOrder';
import Ongoing from './screens/ongoingOrder';
import Sample from './screens/sample';

 

function App() {
 
  return (
    <div className="App">
      
      <Headbar/>
      <Orders/>
      <SideNavBar/>
      
     
    </div>
  );
}

export default App;
