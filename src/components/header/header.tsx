export type Props = {
  block1: string;
  block2: string;
  block3: string;
};
export const Header = ({ block1, block2, block3 }: Props) => {
  return (
    <header className='flex items-center justify-center pt-8 text-white text-[16px] md:text-[24px]'>
      <ul className='flex items-center justify-center gap-10'>
        <li className='cursor-pointer'>
          <a href='#services'>{block1}</a>
        </li>
        <li className='cursor-pointer'>
          <a href='#materials'>{block2}</a>
        </li>
        <li className='cursor-pointer'>
          <a href='#contacts'>{block3}</a>
        </li>
      </ul>
    </header>
  );
};
