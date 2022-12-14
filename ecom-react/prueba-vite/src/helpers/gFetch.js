let productos = [
    {id: '1', nombre: 'producto 1', categoria: 'maquillaje', stock: '100', price:'2500', foto:'https://i.pinimg.com/564x/34/a5/8f/34a58f3ec86fddf67b655e2c66b02624.jpg'},
    {id: '2', nombre: 'producto 2', categoria: 'maquillaje', stock: '100', price:'2000', foto:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbioherbarium.com%2Fmaquillaje-fluido%2Fmaquillaje-fluido-apricot-702&psig=AOvVaw2D3LNunr8kSxtmj0wxuYvv&ust=1671128582757000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPiDtp3d-fsCFQAAAAAdAAAAABAE '},
    {id: '3', nombre: 'producto 3', categoria: 'maquillaje', stock: '100', price:'3500', foto:' https://www.google.com/url?sa=i&url=https%3A%2F%2Fcleanbeautyspot.com%2Fproducts%2Fzao-makeup-eyeshadow-spicy-chic-palette&psig=AOvVaw2D3LNunr8kSxtmj0wxuYvv&ust=1671128582757000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPiDtp3d-fsCFQAAAAAdAAAAABAq '},
]


export const gFetch = () => {
    return new Promise((aceptado, rechazado)=>{
      aceptado(productos)
    })
}






