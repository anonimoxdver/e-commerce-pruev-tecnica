import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className="p-6 flex justify-between">
        <Link href='/' passHref>
            <h1 className='text-2xl font-semibold'>E-Commerce</h1>
        </Link>
        <Link href='/crearProducto' passHref>
            <h1 className='text-2xl  font-semibold text-right '>Crear Producto</h1>
        </Link>
        <Link href='/cart' passHref>
            <h1 className='text-2xl  font-semibold text-right '>Carrito</h1>
        </Link>
        
 
    </nav>
  )
}
