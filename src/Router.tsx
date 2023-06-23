import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { CartPage } from './pages/CartPage'
import { DeliverySuccess } from './pages/DeliverySuccess'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<CartPage />} />
      <Route path="/Success" element={<DeliverySuccess />} />
    </Routes>
  )
}
