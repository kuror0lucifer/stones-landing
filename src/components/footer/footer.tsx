import React from 'react';

type NavData = {
  block1: string;
  block2: string;
  block3: string;
};

export type Props = {
  title: string;
  nav: NavData[];
  address: string;
  contact: string;
  email: string;
};

export const Footer = ({ address, contact, email, nav, title }: Props) => {
  return (
    <footer className='flex justify-between align-baseline text-white px-10 md:px-58 mt-25'>
      <div className='flex flex-col gap-5'>
        <p className='text-[24px]'>{title}</p>
        <p className='text-[16px]'>{address}</p>
        <p className='text-[16px]'>{contact}</p>
        <p className='text-[16px]'>{email}</p>
      </div>
      <div>
        <nav>
          <ul className='flex flex-col gap-10'>
            {nav.map((item, i) => (
              <React.Fragment key={i}>
                <li>{item.block1}</li>
                <li>{item.block2}</li>
                <li>{item.block3}</li>
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};
