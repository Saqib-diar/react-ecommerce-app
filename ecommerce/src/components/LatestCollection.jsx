import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
    //we will get product data using context api
    const { products } = useContext(ShopContext)

    console.log(products);
    
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(()=> {
        setLatestProducts(products.slice(0, 10)) //0 to 10 products
    }, [])

    console.log(latestProducts);
    

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'} />
            <p className='sm:text-sm text-xs md:text-base text-gray-600 w-3/4 m-auto '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur laborum reiciendis, molestias aperiam nesciunt magnam repellendus fuga, blanditiis voluptate et nihil dolores assumenda, beatae ipsam necessitatibus adipisci atque facilis omnis?</p>
        </div>

    <div className='grid sm:grid-cols-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
        latestProducts.map((item, index)=> (
            <ProductItem key={index} id={item._id} image={item.image}  name={item.name} price={item.price} />
        ))
        }
    </div>
        
    </div>
  )
}

export default LatestCollection