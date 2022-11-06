import type { FC } from 'react'
import Image from 'next/image';

import  { useRouter } from 'next/router';


interface Props {
    nombre: string;
    image: string
    slug: string;
    precio: number;
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
            <Image
              className="w-96 rounded-lg flex justify-center mb-1"
              src={image}
              alt="tailwind-card-image"
              width={100}
              height={1000}
              loading='eager'
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
