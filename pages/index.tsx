import { Button, Htag, Input, Rating, Tag, Textarea } from '../components';
import React, { useState } from 'react';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { GetStaticProps } from 'next';
import { API } from '../helpers/api';


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
      <Input placeholder='тест' />
      <Textarea placeholder='тест' />

    </>

  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
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