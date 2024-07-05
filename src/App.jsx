import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./components/Main/Main"
import About from "./components/Departments/About"
import Savollar from "./components/Departments/Savollar"
import SinglePage from "./components/Pages/SinglePage"
import AdmenPanel from "./components/Pages/AdmenPanel"
import Elon from "./components/Pages/Announce"


function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/savollar" element={<Savollar/>}/>
      <Route path="/singlePage" element={<SinglePage/>}/>
       <Route path="/admen" element={<AdmenPanel/>}/>
       <Route path="/elon" element={<Elon/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
