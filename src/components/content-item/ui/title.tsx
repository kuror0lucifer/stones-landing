export type Props = { text: string };

export const Title = ({ text }: Props) => {
  return (
    <div className='w-full text-center md:text-start'>
      <p className='font-semibold md:text-[64px] text-[32px] text-white'>
        {text}
      </p>
    </div>
  );
};
