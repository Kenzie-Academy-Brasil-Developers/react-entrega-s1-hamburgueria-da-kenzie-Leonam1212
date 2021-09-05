import Product from "../Product"
import "./style.css"

const MenuContainer = ({products, handleClick, filteredProducts}) => {

return (

<>
 { filteredProducts.length === 0  ? 

   products.map((prod, index)=>(
      <div className = "items" key ={index}>

        <Product name = {prod.name} 
                 category = {prod.category} 
                 price = {prod.price} 
                handleClick = { () => handleClick( prod.id )}/>

      </div>

 ))
    :

    <Product name = {filteredProducts[0].name} 
             category={filteredProducts[0].category} 
             price = {filteredProducts[0].price} 
             handleClick = {() => handleClick(filteredProducts[0].id)}/>
  
 }         
        <div>
    </div>
</>
)


}

export default MenuContainer;

