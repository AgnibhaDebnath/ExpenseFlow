import { Routes, Route } from "react-router";
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import Signup from "./Pages/Signup";
function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
