import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import ContactMe from "./Pages/ContactMe/ContactMe";
import PageTnks from "./Pages/PageTnks/PageTnks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<ContactMe />}/>
        <Route path="/page-tnks" element={<PageTnks />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
