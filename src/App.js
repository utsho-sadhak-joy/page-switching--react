import React, {useState} from 'react';
// import Home from './components/Home';
// import Sathy from './components/Sathy';
import Card from './components/Card';
import {Container} from 'react-bootstrap'



function App() {
  const[active, setActive] = useState("firstCard");
  return (
    <div className="App">
      <nav>
        <button onClick={()=> setActive("firstCard")}>one</button>
        <button onClick={()=> setActive("secondCard")}>two</button>
        <button onClick={()=> setActive("thirdCard")}>three</button>
      </nav>
      <Container>
        {active === "firstCard" && <Card title="1" />}
        {active === "secondCard" && <Card title="2" />}
        {active === "thirdCard" && <Card title="3" />}
        
      </Container>
      
    </div>
  );
}

export default App;
