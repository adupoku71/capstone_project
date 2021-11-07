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
                {input ? <p>{input}</p> :  <img src={logo} alt="" className="logo" />  } 
           </div>
           <div className="search">
                <input onChange={handleInputChange} type="search" name="" id="" />
           </div>
           <div className="languages-container">
               <p>Google offered in:</p>
               <ul className="laguages">
                   <li>Hausa</li>
                   <li>Igbo</li>
                   <li>Ede</li>
                   <li>Yoruba</li>
                   <li>Nigerian Pigin</li>
               </ul>
           </div>
       </div>
    );
}



export default Body;
