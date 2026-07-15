import { HomePage } from './pages/HomePage';
import { Routes, Route } from "react-router-dom";
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import './App.css';
function App() {

  return (
    <>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path='/orders' element={<OrdersPage/>} />
      <Route path='/TrackingPage' element={<TrackingPage />} />
    </Routes>
    </>
  )
}

export default App
