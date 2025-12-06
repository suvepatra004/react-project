import "./App.css";
import Accordian from "./components/Accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello, World!</h1> */}
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      <ImageSlider url="https://picsum.photos/v2/list" limit={10} page={1} />
    </div>
  );
}

export default App;
