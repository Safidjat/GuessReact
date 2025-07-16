import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import Category from "./components/main/categoryPage"
import Main from "./components/main/homePage"

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/category' element={<Category />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
