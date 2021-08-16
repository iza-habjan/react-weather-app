import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App body-container">
      <Weather defaultCity="Munich" />
      <Footer />
    </div>
  );
}

export default App;
