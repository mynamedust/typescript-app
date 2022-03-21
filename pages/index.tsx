import { Button, Htag, P, Rating, Tag } from '../components';
import React, { useEffect, useState } from 'react';
import { Layout, withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { GetStaticProps } from 'next';


function Home({ menu }: HomeProps): JSX.Element {


  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>Заголовок</Htag >
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <Tag size='s'>маленький</Tag>
      <Tag size='m' color='ghost'>маленький</Tag>
      <Tag size='s' color='green'>маленький</Tag>
      <Tag size='m' color='primary'>маленький</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </>

  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}