import React, {useEffect, useState} from "react"
import Navbar from "../Components/Navbar";

const Home = ()=>{
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window.fetch('/api/avo').then((response)=> response.json()).then(({data, length})=>{setProductList(data)})
  }, [])
  return(
    <div>
      <Navbar />
      <h1>Hola mundo!!</h1>
      {productList.map((product)=>{
        return <div> {product.name}</div>
      })}
    </div>
  )
}

export default Home;