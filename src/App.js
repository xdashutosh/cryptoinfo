import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import CoinDetails from "./components/CoinDetails";
import Coins from "./components/Coins";
import Home from "./components/Home";
import Exchange from "./components/Exchange";
function App() {
  return (
<Router>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/coins" element={<Coins/>}/>
    <Route path="/exchanges" element={<Exchange/>}/>
    <Route path="/coin/:id" element={<CoinDetails/>}/>
  </Routes>
</Router>
  );
}

export default App;
