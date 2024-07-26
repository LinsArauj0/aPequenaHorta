import { RouteApp } from "./app/routes"
import { CartProvider } from "./app/components/CartContext/CartContext"
import "./App.css"

export const App = () => {

  return (
    <div className="app">
      <CartProvider>
        <RouteApp />
      </CartProvider>
    </div>
  )
}