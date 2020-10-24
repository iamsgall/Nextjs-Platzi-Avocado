// @ts-ignore
import API from '../../utils/API';
import ProductDetails from '@components/ProductDetails'
import { GetStaticPaths, GetStaticProps } from 'next';

export default function ProductItem({ product }: any) {

  return <ProductDetails productDetail={product} />;
}
// @ts-ignore
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await API.get(`avo`);
    const productList = await res.data
    // @ts-ignore
    const paths = productList.map(product => ({
      params: {
        productId: product.id
      }
    }))
    return {
      paths,
      fallback: false
    }
  } catch (error) {
    console.log(error);
  }
}
// @ts-ignore
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.productId as string
  try {
    const res = await API.get(`avo/${id}`);
    const product: TProduct = await res.data
    return {
      props: {
        product
      }
    }
  } catch (error) {
    console.log(error);
  }
}

