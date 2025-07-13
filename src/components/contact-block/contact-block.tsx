export type Props = {
  title: string;
  text: string;

  phone_number: string;
  buttonText: string;
};

export const ContactBlock = ({
  title,
  text,
  phone_number,
  buttonText,
}: Props) => {
  return (
    <div
      className='flex flex-col gap-5 items-center justify-center text-white mt-20 md:px-58'
      id='contacts'
    >
      <h1 className='text-[2.5rem] font-bold'>{title}</h1>
      <p className='text-[1.2r]'>{text}</p>
      <a
        href={phone_number}
        className='cursor-pointer'
      >
        <button className='bg-green-600 text-center px-10  py-2 rounded-md cursor-pointer'>
          <p>{buttonText}</p>
        </button>
      </a>
    </div>
  );
};
