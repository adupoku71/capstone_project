import "./style.css"
import Header from "./Components/Heading"
import Body from "./Components/Body"
import Footer from "./Components/Footer"

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      {/* <Footer/> */}
    </div>
  );
}
