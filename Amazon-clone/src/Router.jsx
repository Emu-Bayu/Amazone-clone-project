import React from 'react'
import {BrowserRouter as Router,Routes,Route} from  "react-router-dom"
import Landing from "./Pages/Landing/Landing"
import Signout from "./Pages/Auth/Signout"
import Payment from "./Pages/Payment/Payment"
import Orders from "./Pages/Orders/Orders"
import Results from "./Pages/Results/Results"
import Cart from './Pages/Cart/Cart.JSX'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/auth" element={<Signout/>}/>
        <Route path="Payment" element={<Payment/>}/>
        <Route path="/Order" element={<Orders/>}/>
        <Route path="/category/:categoryName" element={<Results/>}/>
        <Route path="/products/:productId" element={<ProductDetail/>}/>
        <Route path="/Cart" element={<Cart/>}/>
       
      </Routes>
    </Router>
  )
}

export default Routing