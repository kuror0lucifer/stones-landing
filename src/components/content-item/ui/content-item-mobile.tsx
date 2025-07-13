import type { ReactNode } from 'react';

export type Props = {
  subtitleSlot: ReactNode;
  titleSlot: ReactNode;
  textSlot: ReactNode;
};

export const ContentItemMobile = ({
  subtitleSlot,
  textSlot,
  titleSlot,
}: Props) => {
  return (
    <div className='flex flex-col justify-between items-center gap-20'>
      <div className=' md:w-158 flex flex-col gap-7 items-baseline justify-center'>
        {subtitleSlot}
        {titleSlot}
        {textSlot}
      </div>
      <img
        src='/test.jpg'
        alt='photo'
        className='min-w-80 object-cover rounded-xl'
      />
    </div>
  );
};
