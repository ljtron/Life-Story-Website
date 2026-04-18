import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage';
import CreateBook from './pages/CreateBook';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createBook" element={<CreateBook />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;