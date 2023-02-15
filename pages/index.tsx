import {useState} from 'react';

import Htag from '@/components/Htag/Htag';
import Button from '@/components/Button/Button';
import Paragraph from '@/components/Paragraph/Paragraph';
import Tag from '@/components/Tag/Tag';
import Rating from '@/components/Rating/Rating';

import { withLayout } from '@/layout/Layout';


function Home() {
  const [rating, setRating] = useState(4);

  return (
    <>
      <main>
        <Htag tag="h1">Text</Htag>
        <Htag tag="h2">Text</Htag>
        <Htag tag="h3">Text</Htag>
        <Button
          appearance="primary"
          className={'123123'}
        >
          Click!
        </Button>
        <Button appearance="ghost">Click!</Button>
        <Paragraph size="large">Text!</Paragraph>
        <Paragraph>Text!</Paragraph>
        <Paragraph size="small">Text!</Paragraph>
        <Tag
          size="small"
          color="red"
          href="http://hh.ru"
        >
          hh.ru
        </Tag>
        <Tag size="small">Ghost</Tag>
        <Tag color="primary">Primary</Tag>
        <Rating
          isEditable
          rating={rating}
          setRating={setRating}
        />
      </main>
    </>
  );
}

export default withLayout(Home);
