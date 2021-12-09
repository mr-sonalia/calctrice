import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import { Home, About, Features, NotFound } from "./routes";
import { MeanMedianMode } from "./routes";

const App: FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/mean-median-mode" element={<MeanMedianMode />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
