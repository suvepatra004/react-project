import "./App.css";
import Accordian from "./components/Accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello, World!</h1> */}
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
