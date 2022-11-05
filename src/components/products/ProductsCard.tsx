import Link from 'next/link'
import  { useRouter } from 'next/router';
import React, { FC } from 'react'

interface Props {
    nombre: string;
    image: string
    slug: string;
    precio: string;
    descripcion: string
}

export const ProductsCard:FC<Props> = ({ image, nombre, slug, descripcion, precio }) => {

    const router = useRouter()


    const onChangePage = () => {
        router.push(`/product/${slug}`)
    }

  return (
    <div className='flex flex-row justify-center align-middle'>
           <div
      className=" max-w-sm mx-auto xl:max-w-1xl min-w-0 break-words bg-white w-full mb- shadow-lg rounded-xl mt-16 "
    >
        <div className="card">
            
        <div className="card-header mx-4 -mt-6">
            <img
              className="w-96 rounded-lg flex justify-center mb-1"
              src={image}
              alt="tailwind-card-image"
            />
        </div>
        <div className="card-body">
        <h4 className="font-bold ml-2">{nombre} </h4>
          <p className="opcacity-60 m-4">
            {descripcion}
          </p>
        <div className='flex flex-row justify-around pb-2 pt-2'>
          <button className=" uppercase  shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-2 px-5 rounded"  onClick={onChangePage}>
            Leer mas
          </button>
          <p className='font-bold '>   ${precio.toLocaleString()} </p>
        </div>
        
        </div>
      </div>
    </div> 
    </div>


 
  )
}
