type Materials = {
  name: string;
  image: string;
};
export type Props = {
  materials: Materials[];
};

export const Materials = ({ materials }: Props) => {
  return (
    <div
      className='flex flex-col items-center justify-center gap-15 text-white px-58 mt-40 text-center'
      id='materials'
    >
      <h1 className='text-5xl'>Каталог камня</h1>
      <div className='flex  items-center justify-center md:justify-between flex-wrap gap-10'>
        {materials.map(item => (
          <div
            key={item.name}
            className='flex flex-col items-center gap-3'
          >
            <img
              className='min-w-60 h-60 object-cover'
              src={item.image}
              alt={item.name}
            />
            <p className='text-[24px]'>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
