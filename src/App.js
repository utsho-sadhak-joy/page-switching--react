import React, {useState} from 'react';
import Card from './components/Card';
import Puja from './components/Puja';
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
        {active === "firstCard" && <Card title="p" />}
        {active === "secondCard" && <Card title="2" />}
        {active === "thirdCard" && <Puja title="3" />}
        
      </Container>
      
    </div>
  );
}

export default App;
