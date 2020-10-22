import {useRouter} from 'next/router';

export default function ProductItem() {
  const {
    query: {productId},
  } = useRouter();

  return <div>{productId}</div>;
}
