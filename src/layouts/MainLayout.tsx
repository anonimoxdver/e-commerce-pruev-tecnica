import type { FC } from 'react'
import Head from 'next/head';
import { Navbar } from '../components/ui/Navbar';



interface Props {
  title: string;
  children: React.ReactNode;
  pageDescription: string;
  imageFullUrl?: string;
}


export const Layout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {

  return (
      <>
        <Head>
            <title>{ title }</title>

            <meta name="description" content={ pageDescription } />
            
            
            <meta name="og:title" content={ title } />
            <meta name="og:description" content={ pageDescription } />

            {
                imageFullUrl && (
                    <meta name="og:image" content={ imageFullUrl } />
                )
            }

        </Head> 

        <nav>
          <Navbar/>
        </nav>

        <main className='p-5 bg-blue-300'>  
      
            { children }
           
        </main>
      
      </>
  )
};