import React from 'react'
import products from '../data/products'
import CartCard from './CartCard'
import Container from './Container'
import { Link } from 'react-router-dom'
import carts from '../data/carts'

const CartSection = () => {


  return (
    <>
        <div className='flex flex-col gap-3 h-full'>
            {
                carts.map((cart) => (
                    <CartCard key={cart.id} cart={cart} />
                ))
            }
        </div>
        <div className="absolute bottom-10 left-0 w-full bg-white ">
            <Container>
                <div className="border-t border-black flex justify-end gap-10 py-5">
                    <div className="text-right">
                        <p className='text-gray-500'>Total</p>
                        <p className='font-bold'>123</p>
                    </div>
                    <div className="text-right">
                        <p className='text-gray-500'>Tax(10%)</p>
                        <p className='font-bold'>123</p>
                    </div>
                    <div className="text-right">
                        <p className='text-gray-500'>Net Total</p>
                        <p className='text-2xl font-bold'>123</p>
                    </div>
                </div>
                
                <div className="text-end  mb-5">
                    <Link className='border border-black px-8 py-2'>Order Now</Link>
                </div>

            </Container>
        </div>
    </>
  )
}

export default CartSection