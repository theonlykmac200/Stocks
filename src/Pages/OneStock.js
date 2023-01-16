import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'

const OneStock = (props) => {
  
  const apiKey = "bd186e8e2373ce6c123818f05655f4c3"

  const params = useParams()
  const symbol = params.symbol

  const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`

  const [stock, setStock] = useState("null")

  const getStock = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStock(data);
  };

  useEffect(() => {
    getStock()
  }, []);
console.log(stock);
 
    return (
      <div>
        {stock === 'null' ? (
          <h2>Loading...</h2>
        ) : (
      <div>
        <h1>{symbol}</h1>
        <img src={stock[0].image} alt='image'/>
        <h2>Price: ${stock[0].price}</h2>
        <h4 className="desc">Description{stock[0].description}</h4>
        
      </div>
    )}
    </div>
    );
  }



export default OneStock;