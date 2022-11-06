import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next'
import { NextPage } from 'next'
import Image from 'next/image';


import { prisma } from '../../server/db/client';
import { SeedData, ProductProps } from '../../../Data/dataProducts';
import { Layout } from '../../layouts/MainLayout';
import { trpc } from '../../utils/trpc';



const productPage: NextPage<SeedData> = ( {products} ) => {

  const router = useRouter()

  const mutationDelete = trpc.product.deleteProduct.useMutation();
  const mutationAddCarrito = trpc.carrito.createCarrito.useMutation()


  const onRouteEdit = () => {
    router.push(`/crearProducto?q=${router.query.product?.toString()}`)
  }


  const onDeleteProduct = () => {
    products.map((product: any) => (
      mutationDelete.mutate({ id: product.id   })
    ))
    router.replace('/')
    
  }

  const onIncludeCarrito = () => {
    products.map((product: ProductProps) => (
      mutationAddCarrito.mutate({ carritoDeCompras: product as any, quantity: 1, id: product.id!, precio: product.precio })
    ))

    router.push('/cart')
  }




  return (
    <>
      {  products.map((product) => (
        <Layout title={product.nombre}  pageDescription={product.descripcion} key={product.id} >
        <div className="min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden relative">
              <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                  <div className="md:flex items-center -mx-10">
                      <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                          <div className="relative">
                              <Image 
                                              width={100}
                                              height={1000}
                                              loading='eager'
                              src={product.image } className="w-full relative z-10" alt="xd"  />
                              <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                          </div>
                      </div>
                      <div className="w-full md:w-1/2 px-10">
                          <div className="mb-10">
                              <h1 className="font-bold uppercase text-2xl mb-5">{ product.nombre} </h1>
                              <p className="text-sm">{ product.descripcion } </p>
                          </div>
                          <div>
                              <div className="inline-block align-bottom mr-5">
                                  <span className="text-2xl leading-none align-baseline">${product.precio.toLocaleString('en')}</span>
                              </div>
                              <div className=" align-bottom flex justify-evenly pt-2">
                                  <button 
                                    onClick={ onRouteEdit }
                                    className="bg-indigo-700 hover:opacity-100 text-white hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i> Editar</button>
                                  <button 
                                    onClick={ onIncludeCarrito }
                                    className="bg-indigo-700 hover:bg-indigo-700  hover:opacity-100 text-white hover:text-green-800 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i> Agregar Al Carrito</button>
                                  <button 
                                    onClick={ onDeleteProduct }
                                    className="bg-indigo-700  hover:opacity-100 text-white hover:text-red-600 rounded-full px-10 py-2 font-semibold"
                                    ><i className="mdi mdi-cart -ml-2 mr-2"></i> Eliminar</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            </Layout>
      ))
     
    }
    </>
  
  

  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time



export const getServerSideProps: GetServerSideProps = async ({ params }) => {

  const { product } = params as { product : string}


  const  data  = await prisma.products.findMany({
    where: {
      slug: {
        equals: product,
      },
    },
  })

  if ( !data ) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    }
  }

  return {
    props: {
      products: JSON.parse( JSON.stringify(data))
    }
  }
}

export default productPage

