import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import ScrollToTop from "./components/scrollToTop";
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />
        <div className="container mx-auto flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element= {<Navigate to="/products" replace />} />
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
