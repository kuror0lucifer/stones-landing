export type Props = {
  text: string;
};

export const ContentText = ({ text }: Props) => {
  return (
    <div className='w-full text-center md:text-start'>
      <p className='text-white font-bold text-[16px] md:text-[18px]'>{text}</p>
    </div>
  );
};
