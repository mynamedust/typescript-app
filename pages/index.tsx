import { Button, Htag, P, Rating, Tag } from '../components';
import React, { useEffect, useState } from 'react';


export default function Home(): JSX.Element {

  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log('Conter = ' + counter);
    return function cleanyp() {
      console.log('Unmount');
    };
  });

  useEffect(() => {
    console.log('Mounted');
  }, []);

  const [rating, setRating] = useState<number>(4);

  return (
    <div>
      <Htag tag='h1'>{counter}</Htag >
      <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <P>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером,
        но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами.
        Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</P>
      <P size='s'>Напишу сразу в двух курсах, так как проходил оба.
        Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании.
        Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату.
        Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас.
        Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains.
        Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме.
        Скажу вам как прошедший это – реально помогло в трудоустройстве!</P>
      <P size='l'>
        При завершении очередного проекта над графикой, специалист всегда задает себе вопрос о дальнейших перспективах.
        Отличие профессиональных дизайнеров заключается в том, что они гибкие.
        Сегодня разрабатывается логотип новой компании, а завтра вполне можно переключиться на иллюстрацию культовой книги. </P>
      <Tag size='s'>маленький</Tag>
      <Tag size='m' color='ghost'>маленький</Tag>
      <Tag size='s' color='green'>маленький</Tag>
      <Tag size='m' color='primary'>маленький</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </div>

  );
}
