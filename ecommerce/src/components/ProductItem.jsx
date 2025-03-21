import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ({id, image, name, price}) => {
    const { currency } = useContext(ShopContext)
    console.log(currency);
    
  return (
    <Link className='cursor-pointer text-gray-700' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
            <p className='text-sm pt-3 pb-1'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}


export default ProductItem