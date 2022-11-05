import React, { FC, useState } from 'react'
import { ItemCounter } from '../ui/itemCounter'
import { ProductProps } from '../../../Data/dataProducts';
import { trpc } from '../../utils/trpc';
import { useEffect } from 'react';

interface Props {
    caritoDeCompras: ProductProps
    id: string;
    precio: number
}

export const CartCard: FC<Props> = ({ caritoDeCompras, id, precio}) => {

    const mutationUpdate = trpc.carrito.updateNumberOfQuantityOfProducts.useMutation();

    const [cantidadxd, setTempProduct] = useState({
        inventario: 1
      })
  

    const onUpdateQuantity = ( inventario: number ) => {
        setTempProduct( currentProduct => ({
          ...currentProduct,
          inventario
        }));
      }

    useEffect(() => {
        mutationUpdate.mutate({id: id, quantity: cantidadxd.inventario })
    }, [cantidadxd, setTempProduct])
    

  return (

        <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50" key={id}>
        <div className="md:w-4/12 2xl:w-1/1 w-full">
            <img src={ caritoDeCompras.image } alt="Black Leather Bag" className="h-auto object-center object-cover " />
            
        </div>
        <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">

            <div className="flex items-center justify-between w-full pt-1">
            <p className="text-base font-black leading-none text-gray-800 dark:text-white">{ caritoDeCompras.nombre} </p>

            </div>
            <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">{ caritoDeCompras.descripcion} </p>

            <div className="flex items-center justify-between pt-5">
            <div className="flex itemms-center">
           <ItemCounter 
                title='Numero de cantidad del producto'
                currentValue={ cantidadxd.inventario }
                uptadedQuantity={ onUpdateQuantity }
                maxValue={ 20 }
              />
            </div>
            <p className="text-base font-black leading-none text-gray-800 dark:text-white">${precio.toLocaleString()} </p>
            </div>
        </div>
        </div>
  )
}
