import "./App.css";
import Search from "./Search";
import Footer from "./Footer";

function App() {
  return (
    <div className="App body-container">
      <Search defaultCity="Munich" />
      <Footer />
    </div>
  );
}

export default App;
