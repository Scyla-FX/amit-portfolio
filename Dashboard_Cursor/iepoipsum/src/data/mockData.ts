export type OrderStep = 'placed' | 'preparing' | 'delivery' | 'delivered'

export interface FoodItem {
  id: string
  name: string
  description: string
  image: string
  rating: number
  price: number
  category: string
}

export interface Restaurant {
  id: string
  name: string
  image: string
  cuisine: string[]
  deliveryTime: string
  rating: number
  discount?: string
}

export interface RecentOrder {
  id: string
  itemName: string
  thumbnail: string
  date: string
  total: number
  restaurant: string
}

export interface Coupon {
  id: string
  discount: string
  code: string
  subtitle: string
  bg: string
  expiresAt?: number
}

export const user = {
  name: 'Riya Sharma',
  firstName: 'Riya',
  tier: 'Gold Member',
  avatar: '/food/avatar.jpg',
}

export const quickReorder = {
  name: 'Creamy Mushroom Pasta',
  price: 14.5,
  image: '/food/pasta.jpg',
}

export const categories = [
  { id: 'all', label: 'All Foods', icon: '🍽️' },
  { id: 'italian', label: 'Italian', icon: '🍝' },
  { id: 'burgers', label: 'Burgers', icon: '🍔' },
  { id: 'asian', label: 'Sushi & Asian', icon: '🍣' },
  { id: 'healthy', label: 'Healthy', icon: '🥗' },
  { id: 'desserts', label: 'Desserts', icon: '🍰' },
]

export const featuredFood: FoodItem[] = [
  {
    id: 'f1',
    name: 'Creamy Mushroom Pasta',
    description: 'Fresh tagliatelle, wild mushrooms, parmesan cream',
    image: '/food/pasta.jpg',
    rating: 4.8,
    price: 14.5,
    category: 'italian',
  },
  {
    id: 'f2',
    name: 'Spicy Pepperoni Pizza',
    description: 'Stone-baked crust, double pepperoni, mozzarella',
    image: '/food/pizza.jpg',
    rating: 4.9,
    price: 16.99,
    category: 'italian',
  },
  {
    id: 'f3',
    name: 'Avocado Quinoa Salad',
    description: 'Superfood bowl, citrus dressing, toasted seeds',
    image: '/food/salad.jpg',
    rating: 4.7,
    price: 12.0,
    category: 'healthy',
  },
  {
    id: 'f4',
    name: 'Smash Cheese Burger',
    description: 'Double patty, aged cheddar, secret sauce',
    image: '/food/burger.jpg',
    rating: 4.8,
    price: 13.5,
    category: 'burgers',
  },
  {
    id: 'f5',
    name: 'Salmon Sushi Roll',
    description: 'Fresh Atlantic salmon, avocado, sushi rice',
    image: '/food/sushi.jpg',
    rating: 4.9,
    price: 18.0,
    category: 'asian',
  },
  {
    id: 'f6',
    name: 'Dark Chocolate Lava Cake',
    description: 'Warm molten center, vanilla bean gelato',
    image: '/food/cake.jpg',
    rating: 4.9,
    price: 9.99,
    category: 'desserts',
  },
]

export const favoriteRestaurants: Restaurant[] = [
  {
    id: 'r1',
    name: 'Spice Route Kitchen',
    image: '/food/restaurant1.jpg',
    cuisine: ['Indian', 'Curry'],
    deliveryTime: '25–35 min',
    rating: 4.8,
    discount: '20% OFF',
  },
  {
    id: 'r2',
    name: 'Tokyo Ramen House',
    image: '/food/restaurant2.jpg',
    cuisine: ['Japanese', 'Ramen'],
    deliveryTime: '20–30 min',
    rating: 4.9,
  },
  {
    id: 'r3',
    name: 'La Bella Trattoria',
    image: '/food/restaurant3.jpg',
    cuisine: ['Italian', 'Pasta'],
    deliveryTime: '30–40 min',
    rating: 4.7,
    discount: 'Free Delivery',
  },
  {
    id: 'r4',
    name: 'Green Bowl Co.',
    image: '/food/restaurant4.jpg',
    cuisine: ['Healthy', 'Salads'],
    deliveryTime: '15–25 min',
    rating: 4.6,
  },
]

export const recentOrders: RecentOrder[] = [
  {
    id: 'ro1',
    itemName: 'Butter Chicken Combo',
    thumbnail: '/food/butter-chicken.jpg',
    date: 'Today, 6:42 PM',
    total: 24.99,
    restaurant: 'Spice Route Kitchen',
  },
  {
    id: 'ro2',
    itemName: 'Tonkotsu Ramen + Gyoza',
    thumbnail: '/food/ramen.jpg',
    date: 'Yesterday, 1:15 PM',
    total: 19.5,
    restaurant: 'Tokyo Ramen House',
  },
  {
    id: 'ro3',
    itemName: 'Mediterranean Mezze Platter',
    thumbnail: '/food/mezze.jpg',
    date: 'Mar 20, 7:30 PM',
    total: 32.0,
    restaurant: 'Green Bowl Co.',
  },
]

export const coupons: Coupon[] = [
  {
    id: 'c1',
    discount: '50% OFF',
    code: 'FEAST50',
    subtitle: 'On orders above $25',
    bg: 'bg-gradient-to-br from-[#FF6B35] to-[#FF8F5A]',
    expiresAt: Date.now() + 5028000,
  },
  {
    id: 'c2',
    discount: '20% OFF',
    code: 'BURGER20',
    subtitle: 'Gourmet Burger joints',
    bg: 'bg-gradient-to-br from-[#E85520] to-[#FF6B35]',
  },
  {
    id: 'c3',
    discount: 'FREE DEL',
    code: 'FREESHIP',
    subtitle: 'On orders above $30',
    bg: 'bg-gradient-to-br from-[#0D9488] to-[#14B8A6]',
  },
]

export const activeOrder = {
  id: 'ORD-2847',
  items: 'Butter Chicken, Garlic Naan × 2',
  restaurant: 'Spice Route Kitchen',
  step: 'delivery' as OrderStep,
  eta: 12,
  driver: 'Arjun Mehta',
  driverAvatar: '/food/driver.jpg',
}

export const orderSteps: { key: OrderStep; label: string }[] = [
  { key: 'placed', label: 'Order Placed' },
  { key: 'preparing', label: 'Preparing' },
  { key: 'delivery', label: 'Out for Delivery' },
  { key: 'delivered', label: 'Delivered' },
]

export const loyalty = { current: 340, target: 500, reward: 'Free Dessert' }
