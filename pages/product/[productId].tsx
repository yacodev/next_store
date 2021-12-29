import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
  const {query: {productId}} = useRouter()

  return (
    <div>
      this is the page : {productId}
    </div>
  )
}

export default ProductItem
