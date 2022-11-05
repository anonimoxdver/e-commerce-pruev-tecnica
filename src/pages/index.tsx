import { type NextPage } from "next";
import { ProductList } from "../components/products/ProductList";
import { Spinner } from "../components/ui/Spinner";
import { Layout } from "../layouts/MainLayout";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.getingProducts.getAll.useQuery();
  console.log()

  if( isLoading ) return (
    <Spinner/>
  )



  return (
    <Layout title={"Pagina Principal"}  pageDescription={"pagina principal"}>
      <ProductList products={ data as any }/>
    </Layout>
  );
};

export default Home;
  