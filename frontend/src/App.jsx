import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddSchool from "./AddSchool";
import Navbar from "./Navbar";
import ShowSchools from "./ShowSchools";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<ShowSchools/>}/>
      <Route path="/add-school" element={<AddSchool/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;