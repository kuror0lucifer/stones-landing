import type { ReactNode } from 'react';

export type Props = {
  imgPosition: 'left' | 'right';
  subtitleSlot: ReactNode;
  titleSlot: ReactNode;
  textSlot: ReactNode;
};

export const ContentItem = ({
  imgPosition,
  subtitleSlot,
  textSlot,
  titleSlot,
}: Props) => {
  const image = (
    <img
      src='/test.jpg'
      alt='photo'
      className='w-80 object-cover'
    />
  );

  return (
    <div className='flex justify-between items-center'>
      {imgPosition === 'left' && image}
      <div className='w-158 flex flex-col gap-7 items-baseline justify-center'>
        {subtitleSlot}
        {titleSlot}
        {textSlot}
      </div>
      {imgPosition === 'right' && image}
    </div>
  );
};
