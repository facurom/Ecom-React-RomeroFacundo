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
    const precioTotal = () => cartList.reduce((contador, product) => contador += (product.cantidad * product.price) , 0)

    const cantidadTotal = () => cartList.reduce((contador, product) => contador += product.cantidad , 0)




    return(
        <CartContext.Provider value={{
            cartList, 
            addtoCart,
            vaciarCarrito,
            cantidadTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}