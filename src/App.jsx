import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
import Category from "./components/main/Category"

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/category/subcategory/type' element={<Category />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
