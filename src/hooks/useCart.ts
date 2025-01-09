import { useState, useEffect } from 'react'

export function useCart() {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        const savedCart = localStorage.getItem('cart')
        if (savedCart) {
            setCartItems(JSON.parse(savedCart))
        }
    }, [])

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id)
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            return [...prevItems, { ...product, quantity: 1 }]
        })
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])

    return { cartItems, addToCart }
}

