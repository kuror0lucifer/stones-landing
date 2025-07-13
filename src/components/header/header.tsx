export type Props = {
  block1: string;
  block2: string;
  block3: string;
};
export const Header = ({ block1, block2, block3 }: Props) => {
  return (
    <header className='flex items-center justify-center pt-8 text-white'>
      <ul className='flex items-center justify-center gap-10'>
        <li className='cursor-pointer'>{block1}</li>
        <li className='cursor-pointer'>{block2}</li>
        <li className='cursor-pointer'>{block3}</li>
      </ul>
    </header>
  );
};
