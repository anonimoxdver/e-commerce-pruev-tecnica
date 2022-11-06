import { prisma } from '../../server/db/client';
import { GetServerSideProps } from 'next';

import { useEffect, useState } from 'react';
import { ProductProps } from '../../../Data/dataProducts';
import { ItemCounter } from '../../components/ui/itemCounter';
import { Layout } from '../../layouts/MainLayout';
import { useRouter } from 'next/router';
import { trpc } from '../../utils/trpc';



const crearProducto = ({ product }: any ) => {
  const router = useRouter()

  const { 0: itemProduct} = product 
  const mutationUpdate = trpc.product.updateProduct.useMutation();
  const mutationCreate = trpc.product.createProduct.useMutation();



  const [tempProduct, setTempProduct] = useState<ProductProps>({
    id:  itemProduct.id,
    nombre: itemProduct.nombre,
    slug: itemProduct.slug,
    image: itemProduct.image,
    descripcion: itemProduct.descripcion,
    inventario: itemProduct.inventario,
    precio: itemProduct.precio ,
  })



  const onInputChange = ( {target} : any) => {
    const { name, value } = target;
    setTempProduct({
        ...tempProduct,
        [ name ]: value
    });
}


  const updatedQuantity = ( inventario : number ) => {
    setTempProduct( currentProduct => ({
      ...currentProduct,
      inventario
    }))
  }

  useEffect(() => {
  
    if ( itemProduct.slug.length < 2 ) {
      const newSlug = tempProduct.nombre?.trim()
        .replaceAll(' ', '-')
        .replaceAll("'", '')
        .toLocaleLowerCase() || '';

      return setTempProduct( ItemCounter => ({
        ...ItemCounter,
        slug : newSlug
      }))
    } 
  }, [tempProduct.nombre, setTempProduct])

  useEffect(() => {
  
    if ( typeof tempProduct.precio === 'string') {
      const newPrice = parseInt(tempProduct.precio, 10)
          
      console.log({newPrice})
      return setTempProduct( ItemCounter => ({
        ...ItemCounter,
        precio : newPrice
      }))
    } 
  }, [tempProduct.precio, setTempProduct])

  

 console.log( router.query.q )

  const onProductSubmit = (e : any) => {
    e.preventDefault()
    console.log({tempProduct})
    if ( router.query.q === undefined ) {
      return      mutationCreate.mutate({
        nombre: tempProduct.nombre,
        descripcion: tempProduct.descripcion,
        inventario: tempProduct.inventario!,
        image: tempProduct.image,
        precio: tempProduct.precio as any,
        slug: tempProduct.slug
      })    
      
      
    } 
      
  
    mutationUpdate.mutate({
      id: tempProduct.id!,
      nombre: tempProduct.nombre,
      descripcion: tempProduct.descripcion,
      inventario: tempProduct.inventario!,
      image: tempProduct.image,
      precio: tempProduct.precio!

    })  
    router.push('/')

  }
console.log({tempProduct})

  return (
    <Layout title={'Crear Producto'} pageDescription={'crea tu Producto'} >
      <div className="max-w-2xl mx-auto bg-white p-16">
        <h2 className='font-bold text-xl'>Crea un Producto</h2>

     
          <div className="grid gap-6 mb-6 lg:grid-cols-2">

          </div>
          <div className="mb-6">
            <label 
              form="nombre" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
            >
              nombre del producto
            </label>
            <input 
              type={ tempProduct.nombre}
              value={tempProduct.nombre}
              name="nombre"
              onChange={onInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Agitador Magnético con Placa de Calentamiento" 
              required 
            />
          </div>
          <div className="mb-6">
            <label 
              form="descripcion" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
            >
              ponle una descripcion al producto
            </label>
            <input 
              type={ tempProduct.descripcion}
              value={ tempProduct.descripcion}
              name="descripcion"
              onChange={onInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="El agitador magnético con placa de...." 
              required 
            />
          </div>
          <div className="mb-6">
            <label 
              form="sube la url de una imagen" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
            >
              sube la url de una imagen
            </label>
            <input
              type={ tempProduct.image}
              value={ tempProduct.image}
              name="image"
              onChange={onInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="https://" 
              required 
            />
          </div>
          <div className="mb-6">
            <label 
              form="Precio" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
            >
              Precio del Producto
            </label>
            <input
              type="number" 
              value={ tempProduct.precio}
              name="precio"
              onChange={onInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="$0000" 
              required 
            />
          </div>
          <ItemCounter
          title='Numero de inventario del producto'
            currentValue={ tempProduct.inventario! }
            uptadedQuantity={ updatedQuantity }
            maxValue={ 20 }
          />

          <button 
            onClick={ onProductSubmit }
            className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
 
      </div>
    </Layout>
  )
}



export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  const { q } = query as { q : string}


  const  data  = await prisma.products.findMany({
    where: {
      slug: {
        equals: q,
      },
    },
  })

  const emptyProduct = 
   [ {

        nombre: '',
        slug: '',
        image: '',
        descripcion: '',
        inventario: 1,
        precio: 1,
    }]


  return {
    props: {
      product:  data.length < 2 ? JSON.parse( JSON.stringify(data)):  emptyProduct
    }
  }
}


export default crearProducto



