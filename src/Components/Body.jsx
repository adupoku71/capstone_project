import { useState } from "react"
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"
import { FaMicrophone } from "react-icons/fa"
import logo from "../logo.jpeg"
function Body() {
  const [input, setUserInput] = useState("")
  const handleInputChange = (e) => {
    setUserInput(e.target.value)
  }
  const clearInput = () => {
    setUserInput("")
  }
  return (
    <div className="hero-section">
      <div className="sidehustle-logo">
        {input ? <p>{input}</p> : <img src={logo} alt="" className="logo" />}
      </div>
      <div className="search">
        <AiOutlineSearch />
        <input onChange={handleInputChange} type="text" value={input} />
        <div className="close">
          {input ? (
            <button onClick={clearInput}>
              <AiOutlineClose />
            </button>
          ) : (
            ""
          )}
        </div>
        <FaMicrophone onClick={clearInput} style={{ color: "green" }} />
      </div>
      <div className="search-buttons">
        <button>SideHustle Search</button>
        <button>I'm Feeling Lucky</button>
      </div>
      <div className="languages-container">
        <div>
          <p>Google offered in:</p>
        </div>
        <div>
          <ul className="languages">
            <li>Hausa</li>
            <li>Igbo</li>
            <li>Ede</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Body
