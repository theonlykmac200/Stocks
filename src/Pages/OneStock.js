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
 //i changed the alt name because you were getting an error that image is redundant, a screen reader already knows it is an image
    return (
      <div>
        {stock === 'null' ? (
          <i class="fa fa-spinner fa-spin" style={{ fontSize:"24px", textAlign: "center", display: 'block'}}></i>
        ) : (
      <div>
        <h1>{symbol}</h1>
        <img src={stock[0].image} alt='company-logo'/>
        <h2>Price: ${stock[0].price}</h2>
        <h4 className="desc">Description{stock[0].description}</h4>
        
      </div>
    )}
    </div>
    );
  }



export default OneStock;