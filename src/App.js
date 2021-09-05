import './App.css';
import {useState} from "react"
import MenuContainer from "./components/MenuContainer"
import Carrinho from "./components/Carrinho"


function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ]); 

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [inputValue, setInputValue] = useState ("")
  const [cartTotal, setCartTotal] = useState(0)
  

  const showProducts = (valueInput) => {
     let produtoFiltrado = products.filter((prod) => prod.name === valueInput)
      setFilteredProducts(produtoFiltrado)

  }

  const handleClick = (productId ) => {
    let produtoSelecionado =  products.find((element) => element.id === productId)
    if( !currentSale.includes(produtoSelecionado) ) {
      setCurrentSale([...currentSale, produtoSelecionado])

    }
    
  }
  // Função para calcular o valor do carrinho
  const subtotal = (currentSale) => {
  let total = currentSale.reduce((acc, curr) => acc+curr.price, 0)
  return total.toFixed(2)
 }


  return (
    <div className="App">

    <div className = "input--button">

      <input placeholder= "Ex: Hamburguer" value = {inputValue} onChange = {(e) =>  setInputValue(e.target.value)}/>
      <button onClick = {()=> showProducts(inputValue)}>Buscar</button>

    </div>

      
     <div className = "products">
      <MenuContainer products = {products} 
                     handleClick={handleClick} 
                     setFilteredProducts = {setFilteredProducts} 
                     filteredProducts ={filteredProducts}                  
                     showProducts = {showProducts}
                     filteredProducts = {filteredProducts} />

    </div>

    <div className = "cart">
        <div className = "title">
          <h2>Seu carrinho</h2>
          <p>Subtotal: {subtotal(currentSale)} </p>
        </div>
         { currentSale.length !==0 ? <Carrinho currentSale = {currentSale}/>  : "" }
    </div>

   </div>

  );
}

export default App;
