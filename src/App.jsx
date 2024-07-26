import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeComp from "./components/pages/HomeComp"
import HeaderComp from "./components/header/HeaderComp"
import './App.css'
import FooterComp from "./components/footer/FooterComp"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import UserEditComp from "./components/pages/user/UserEditComp"



function App() {


  return (
<BrowserRouter>
<HeaderComp/>
<Routes>
  <Route path="/" element={<HomeComp />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/accountSetting" element={<UserEditComp />} />
</Routes>
<FooterComp/>
</BrowserRouter>
  )
}

export default App
