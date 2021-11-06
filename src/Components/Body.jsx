import { useState } from 'react'
import logo from '../logo.jpeg' 
function Body() {
    const [input, setUserInput] = useState("");
    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    }

    return (
       <div className="hero-section">
           <div className="sidehustle-logo">
                {input ? <p>{input}</p> :  <img src={logo} alt=""  />  }     
           </div>
           <input onChange={handleInputChange} type="search" name="" id="" />
       </div>
    );
}



export default Body;
