import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Header />
        <div className="container mx-auto flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
