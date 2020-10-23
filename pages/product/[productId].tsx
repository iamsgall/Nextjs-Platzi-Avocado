import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import API from '../../utils/API';
import ProductDetails from '@components/ProductDetails'

export default function ProductItem() {
  const {
    query: { productId },
  } = useRouter();

  const [avo, setAvo] = useState<TProduct>();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await API.get(`avo/${productId}`);
        return setAvo(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [productId]);

  return <ProductDetails productDetail={avo} />;
}
