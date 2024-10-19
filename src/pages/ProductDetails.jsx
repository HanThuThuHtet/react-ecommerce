import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products'
import Container from '../components/Container'
import Rating from '../components/Rating'
import Breadcrumb from '../components/Breadcrumb'

const ProductDetails = () => {

   const { productId } = useParams(); 
   const currentProduct = products.find((product) => product.id == productId);

  return (
    <Container>
      <Breadcrumb currentPageTitle="Product Details" />
      <div className="border border-black p-10">
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <img src={currentProduct.image} className='w-2/4 block mx-auto' alt="" />
          </div>
          <div className="col-span-1 flex flex-col gap-5 items-start">
            <h3 className='text-2xl font-bold'>{currentProduct.title}</h3>
            <p className='bg-gray-200 text-gray-700 inline-block px-5 py-1'>{currentProduct.category}</p>
            <p>{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />
            <div className="flex justify-between items-center w-full">
              <p>Price : ({currentProduct.price})</p>
              <button className="border text-sm px-3 py-1 border-black">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductDetails