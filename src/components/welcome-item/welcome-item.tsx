export type Props = {
  title: string;
  subline: string;
};

export const WelcomeItem = ({ subline, title }: Props) => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-10 pb-60 text-center'>
      <h1 className='text-white font-bold text-[64px] xs:text-[48px]'>
        {title}
      </h1>
      <p className='text-white font-normal text-[18px]'>{subline}</p>
    </div>
  );
};
