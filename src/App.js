import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="container body-container">
      <Weather defaultCity="Ljubljana" />
      <Footer />
    </div>
  );
}
