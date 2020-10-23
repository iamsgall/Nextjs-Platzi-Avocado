import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import API from '../utils/API';

export default function Home() {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await API.get('avo');
        return setProductList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {productList.map(product => (
        <p key={product?.id}>{product?.name}</p>
      ))}
    </div>
  );
}