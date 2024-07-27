import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { NavBar } from "../components/NavBar/Index"
import { Footer } from "../components/Footer/Footer"
import { Home } from "../pages/Home/Home"
import { About } from "../pages/About/About"
import { Contact } from "../pages/Contact/Contact"
import { Product } from "../pages/Product/Product"
// import Cart from "../components/Carrinho/Cart"
import CartPage from "../pages/Cart/CartPage"

export const RouteApp = () => {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product" element={<Product />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<Navigate to="/page-initial" />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}