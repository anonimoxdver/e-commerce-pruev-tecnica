import type { FC } from 'react'
import { ProductsCard } from './ProductsCard';
import { SeedData } from '../../../Data/dataProducts';



export const ProductList:FC<SeedData>  = ({ products }) => {


  return (
    <div className='flex flex-wrap justify-around'>
        {
            products.map((product) => (
                 <ProductsCard {...product} key={ product.id } />
            ))
        }
       
    </div>
  )
}
