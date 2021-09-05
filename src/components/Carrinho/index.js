import "./Carrinho.css"
const Carrinho = ({currentSale}) => {
    return (
        <> 
            {currentSale.map((element, index)=>(
                <ul className = "Products--cart" key={index}>
                    <li>Nome: {element.name}</li>
                    <li>Categoria: {element.category}</li>
                    <li>Price:{element.price}</li>
                </ul>
            ))}
        </>
   )
}


export default Carrinho






