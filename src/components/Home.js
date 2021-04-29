import React from 'react'
import Sadia from './Sadia';
import Puja from './Puja';
import Sathy from './Sathy';
import Button from 'react-bootstrap/Button';




const  sexy = () => {
    console.log("Babu Khaicho");
}






const Home = () => {
    return (
        <div style={{backgroundColor:"black",height:"350px"}}>
            {/* <h1>Hi sexy</h1>s */}
            {/* <Sadia />
            <Puja /> */}

               <Sadia />
               <Puja />
               <Sathy />

            <Button className="btn btn-secondary ml-5 mt-5">Sadia</Button>
            <Button className="btn btn-secondary ml-5 mt-5" onClick={sexy} >Puja</Button>
            {/* <button onClick={this.handleClick()}>Click Me</button> */}
            {/* onClick='window.alert("I wanna fuck you!") */}
        </div>
    )
}

export default Home
