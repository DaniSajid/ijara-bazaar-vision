import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeComp from "./components/pages/HomeComp"
import HeaderComp from "./components/header/HeaderComp"
import './App.css'


function App() {


  return (
<BrowserRouter>
<HeaderComp/>
<Routes>
  <Route path="/" element={<HomeComp />} />
</Routes>
</BrowserRouter>
  )
}

export default App
