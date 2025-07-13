import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Background = ({ children }: Props) => {
  return (
    <div className='relative w-full min-h-screen overflow-hidden'>
      {/* Фон: изображение + градиент */}
      <div
        className='absolute inset-0 z-[-1] bg-top bg-no-repeat bg-contain'
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0.2) 50%,
              rgba(33, 32, 30, 0.5) 70%,
              rgba(33, 32, 30, 0.8) 85%,
              #21201e 100%
            ),
            url('/bg.jpg')
          `,
        }}
      />

      {/* Контент поверх */}
      <div className='relative z-10'>{children}</div>
    </div>
  );
};
