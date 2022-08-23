import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Skills from "./Routes/Skills";
import Contact from "./Routes/Contact";


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/skills" element={<Skills />}>
          <Route path="/skills/:id" element={<Skills />} />
        </Route>
        <Route path="/contact" element={<Contact />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
