import "./style.css"
import React from "react"

const Product = ({name, category, price, handleClick, id}) => {

    return ( 
            <ul>
                       <li>Nome: {name}</li>
                       <li>Categoria: {category}</li>
                       <li>Preço: {price}</li>
                       <button onClick={()=>handleClick(id)}>Add</button>
            </ul>
                       
    )
}

export default Product;

