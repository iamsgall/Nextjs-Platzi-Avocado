import ProductList from '@components/ProductList';
import { GetServerSideProps, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
// @ts-ignore
import API from '../utils/API';
// @ts-ignore
export default function Home({ productList }) {

  return (
    <ProductList productList={productList} />
  );
}
// @ts-ignore
export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const res = await API.get('avo');
    const productList: TProduct[] = await res.data
    return {
      props: {
        productList
      }
    }
  } catch (error) {

  }

}