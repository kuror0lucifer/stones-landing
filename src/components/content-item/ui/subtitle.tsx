export type Props = {
  text: string;
};

export const Subtitle = ({ text }: Props) => {
  return (
    <div className='flex items-center justify-center gap-6 w-full md:items-center md:justify-start '>
      <div className='w-18 h-0.5 bg-amber-400'></div>
      <p className='text-amber-400 font-extrabold text-[18px]'>{text}</p>
    </div>
  );
};
