let productos = [
    {id: '1', nombre: 'producto 1', categoria: 'maquillaje', stock: '100', price:'2500'},
    {id: '2', nombre: 'producto 2', categoria: 'maquillaje', stock: '100', price:'2000'},
    {id: '3', nombre: 'producto 3', categoria: 'maquillaje', stock: '100', price:'3500'},
]


export const gFetch = () => {
    return new Promise((aceptado, rechazado)=>{
      aceptado(productos)
    })
}






