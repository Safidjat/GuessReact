import { Route, Routes } from "react-router-dom"
import Header from "./header"
import Main from "./main"
import Footer from "./footer"

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
