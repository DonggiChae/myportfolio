import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Skills from "./Routes/Skills";
import Contact from "./Routes/Contact";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/myportfolio/" element={<Home />}>
        </Route>
        <Route path="/myportfolio/about" element={<About />}>
        </Route>
        <Route path="/myportfolio/skills" element={<Skills />}>
          <Route path="/myportfolio/skills/:id" element={<Skills />} />
        </Route>
        <Route path="/myportfolio/contact" element={<Contact />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
