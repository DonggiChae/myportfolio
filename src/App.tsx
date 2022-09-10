import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from "./Components/scrollReact/Header";
import ScrollContents from "./Components/scrollReact/scrollContents";


function App() {
  return (
    <div className="ml-20 font-mono">
      <div className="flex">
        <ScrollContents />
        <Header />
      </div>
    </div>
  );
}

export default App;
