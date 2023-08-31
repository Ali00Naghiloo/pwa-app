import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Menu from "./components/menu/Menu";
import Game from "./components/game/Game";
import store from "../app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
