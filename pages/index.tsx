import ProductList from '@components/ProductList';
import { GetServerSideProps, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import API from '../utils/API';

export default function Home({ productList }) {

  return (
    <ProductList productList={productList} />
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const res = await API.get('avo');
    const productList = await res.data
    return {
      props: {
        productList
      }
    }
  } catch (error) {

  }

}