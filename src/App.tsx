import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import { Home, About, Tools, NotFound } from "./routes";

const App: FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
