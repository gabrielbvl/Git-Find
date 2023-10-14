import Header from "../../components/Header";
import background from "../../assets/background.png";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contentBodyPage">
        <img src={background} className="background" alt="backgroundPage" />
        <div className="rightBodyPage">aro</div>
      </div>
    </div>
  );
}

export default App;
