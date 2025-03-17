import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    
    
    useEffect(()=>{
        const bestProducts = products.filter((item) => (item.bestseller));
        setBestSeller(bestProducts.slice(0, 5))
    },[])
    console.log(bestSeller);


  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-10'>
            <Title  text1={'BEST'} text2={'PRODUCTS'}/>
            <p className='w-3/4 m-auto sm:text-sm text-xs md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestias, illo eos qui optio commodi doloribus, doloremque odit voluptatibus dolor quasi cupiditate placeat fugiat officia amet vitae, blanditiis suscipit beatae.</p>
        </div>
        
        <div className='grid sm:grid-cols-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item, index) => (
                     <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller