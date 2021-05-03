import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Comments from "./components/Comments/Comments";
import MainVideo from "./components/MainVideo/MainVideo";
import Suggestion from "./components/Suggestion/Suggestion";

function App() {
  return (
    <div className="row">
      <div className="col-md-8">
        <MainVideo />
        <Comments />
      </div>
      <Suggestion />
    </div>
  );
}

export default App;
