
import './App.css';
import Button from './Components/Button';
import Primarybtn from './Components/Primarybtn';
import Content from './Components/Content'
import Promotion from './Components/Promotion';
import Bottom from './Components/Bottom';
import Button2 from './Components/Button2';
function App() {
  return (
    <>
    <div className="Navbar">
     <h3 className='Logo' >ARSHA</h3> 
    <Primarybtn />
    <Button title="Contact"/>
     <Button title="Team"/>
     <Button title="Portfolio"/>
     <Button title="Services"/>
     <Button title="About"/>
     <Button title="Home"/>
    
    
    </div>
    <div className='Section-page'>
    <Content />
    <Button2 />
    </div>
    <div className='Promo'>
       <Promotion />
    
    </div>
    <div >
      <Bottom />
    </div>
    </>
  );
}

export default App;
