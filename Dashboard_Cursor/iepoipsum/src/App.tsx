import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { OffersSidebar } from './components/OffersSidebar'
import { CategoryBar } from './components/CategoryBar'
import { FeaturedToday } from './components/FeaturedToday'
import { ActiveOrder } from './components/ActiveOrder'
import { LoyaltyWidget } from './components/LoyaltyWidget'
import { FavoritesGrid } from './components/FavoritesGrid'
import { RecentOrders } from './components/RecentOrders'

function App() {
  const [cart, setCart] = useState(2)
  const add = () => setCart((c) => c + 1)

  return (
    <div className="min-h-screen bg-[#fff8f0]">
      <Navbar cartCount={cart} />

      <main className="mx-auto max-w-[1280px] space-y-6 px-5 py-6">
        <Hero onReorder={add} />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <OffersSidebar />
          </div>

          <div className="space-y-6 lg:col-span-6">
            <CategoryBar />
            <FeaturedToday onAdd={add} />
            <RecentOrders />
            <FavoritesGrid />
          </div>

          <div className="space-y-4 lg:col-span-3">
            <ActiveOrder />
            <LoyaltyWidget />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
