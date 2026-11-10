
import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // 1. State for dark mode
  const [darkMode, setDarkMode] = useState(false)

  // 2. State for cart management
  const [cartItems, setCartItems] = useState([])

  // 3. State for category filtering
  const [category, setCategory] = useState('all')

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Function to add products to cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item])
  }

  // Function to change category
  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>

      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Dark Mode Toggle */}
      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Category Filter */}
      <label>Filter by Category: </label>

      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Product List */}
      <ProductList
        category={category}
        addToCart={addToCart}
      />

      {/* Shopping Cart */}
      <Cart cartItems={cartItems} />

    </div>
  )
}

export default App

