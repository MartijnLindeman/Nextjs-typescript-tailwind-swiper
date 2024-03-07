'use client'

import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import Image from 'next/image'; // Import next/image

const photos = [
  'https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const content = [
  {
    header: 'Title01',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim quidem ipsum quos corrupti totam ullam nam, amet, quam dolores saepe assumenda adipisci tenetur, sunt minima et porro unde excepturi?',
  },
  {
    header: 'Title02',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim quidem ipsum quos corrupti totam ullam nam, amet, quam dolores saepe assumenda adipisci tenetur, sunt minima et porro unde excepturi?',
  },
  {
    header: 'Title03',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim quidem ipsum quos corrupti totam ullam nam, amet, quam dolores saepe assumenda adipisci tenetur, sunt minima et porro unde excepturi?',
  },
];

export default function Rewind() {
  return (
    <section className="pt-[7rem] pb-[2rem] bg-yellow-100">
      <div className="lg:mx-auto max-w-5xl mx-[1.5rem]">
        <h1 className="text-[3rem] font-bold underline mb-[2rem] text-center">
          Rewind
        </h1>
        <div className="grid md:grid-cols-2 x-md:grid-rows-2 gap-y-16  md:gap-x-10 ">
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={30}
            navigation
            className="rewind"
          >
            {content.map((p, index) => (
              <SwiperSlide className="p-7 pb-16" key={index}>
                <h1 className="font-bold">{p.header}</h1>
                <p>{p.info}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <Image
            src={photos[0]}
            alt="Route 66"
            width={1260}
            height={750}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
}