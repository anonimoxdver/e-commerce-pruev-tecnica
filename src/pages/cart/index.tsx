import React from 'react'
import { Spinner } from '../../components/ui/Spinner';
import { Layout } from '../../layouts/MainLayout'
import { trpc } from '../../utils/trpc';
import { ProductProps } from '../../../Data/dataProducts';
import { CartCard } from '../../components/cart/cartCard';
import { useEffect } from 'react';

interface Props {
    carritoDeCompras: ProductProps
    id: string;
    quantity: number
    precio: number
}

const cartPage = () => {
    const { data , isLoading } = trpc.carrito.getAllCarrito.useQuery();

    console.log({data})
   
    
  if( isLoading ) return (
    <Spinner/>
  )


  const totalNum = data!.map(( products) => products.precio)
  const totalQuantity = data!.map(( products) => products.quantity )

  const  totalQu = totalQuantity.reduce((a, b) => a + b, 0);

  const  totalNumeros = totalNum.reduce((a, b) => a + b, 0);

  const  total = totalNumeros * totalQu

  console.log({totalNumeros, total})

  

    


  return (
 <Layout title={'carrito de compras'}  pageDescription={'carrito de compras'}>
    <div className="w-full h-full bg-black dark:bg-gray-900 bg-opacity-90  " id="chec-div">
    
  <div className="w-full   h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
    <div className="flex items-end lg:flex-row flex-col justify-end" id="cart">
      <div className="overflow-y-auto lg:w-full md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800  overflow-x-hidden lg:h-screen h-auto" id="scroll">
        <div className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer" >
 

        </div>
        <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">Carrito de Compras</p>
        {
            data!.map(( product ) => (
                <CartCard {...product} />
            )) 
        }
     
   
      <div className="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-90">
        <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-5 justify-between overflow-y-auto">
          <div>
            <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">Resumen</p>

            <div className="flex items-center justify-between pt-5">
              <p className="text-base leading-none text-gray-800 dark:text-white">Productos</p>
              <p className="text-base leading-none text-gray-800 dark:text-white">
                {
                  data?.map(({ caritoDeCompras, quantity, }) => (
                    <div className='flex flex-row'>
                     <p className='p-2'>{ caritoDeCompras.nombre}. </p>
                     <p>x{ quantity} </p>
                    </ div>
                   
                  ))
                }
              </p>
            </div>

          </div>
          <div>
            <div className="flex items-center pb-2 justify-between lg:pt-5 pt-10">
              <p className="text-2xl leading-normal text-gray-800 dark:text-white">Total</p>
              <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">{totalNumeros.toLocaleString('en')} </p>
            </div>
            <button className="text-base leading-none  py-7 w-full  bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>
</div>
</Layout>

  )
}

export default cartPage    





