import { createContext, useContext, useState } from "react";




export const CartContext = createContext([])  
export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])
    
    
    const addtoCart = (product) => {
        setCartList([
            ...cartList,
            product
        ])

    }

    const vaciarCarrito = () => setCartList([])
    return(
        <CartContext.Provider value={{
            cartList, 
            addtoCart,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}