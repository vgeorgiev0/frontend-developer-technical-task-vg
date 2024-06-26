import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

interface MainHeroProps {}

const MainHero: React.FC<MainHeroProps> = ({}) => {
  return (
    <div className='w-full relative h-max z-10 bg-gradient-to-tr from-[#F5A8AE] via-foreground to-[#D7E9F5] flex flex-1 items-center justify-center flex-col lg:flex-row '>
      <div className='flex flex-col items-center text-center font-poppins h-full gap-5 pt-16 lg:pl-16'>
        <h1 className='text-2xl lg:text-4xl font-medium tracking-tight text-typography'>
          There’s a new wearable in town
        </h1>
        <p className='text-xs font-saira text-typography'>
          Bye-bye swabs, stirrups and speculums. Hello Diagnostic Tampon from
          Daye.
        </p>
        <Button variant={'secondary'} className='rounded-sm h-12 px-6'>
          ORDER YOUR STI SCREEN
        </Button>
      </div>
      <Image
        src={
          'https://images.prismic.io/ecommerce-website/65e202b7676dc480aae07efd_sti_homepage_hero_desktop.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max'
        }
        alt='hero'
        width={560}
        height={400}
        className='mx-auto'
      />
    </div>
  );
};

export default MainHero;
