"use client"

import Image from 'next/image';

import * as React from 'react';
import PreviewShow from './PreviewShow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { PreviewType } from './Previewtype';

const imgList2 = [
  {
    id: '1',
    img: 'https://images.pexels.com/photos/12823580/pexels-photo-12823580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    place: 'Living',
  },
  {
    id: '2',
    img: 'https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    place: 'Green House',
  },
  {
    id: '3',
    img: 'https://images.pexels.com/photos/161097/allgau-eisenberg-ostallgau-bavaria-161097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    place: 'Green Plateau',
  },
  {
    id: '4',
    img: 'https://images.pexels.com/photos/434334/pexels-photo-434334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    place: 'Flower Field',
  },
  {
    id: '5',
    img: 'https://images.pexels.com/photos/325944/pexels-photo-325944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    place: 'Sunset',
  },
];

export default function Preview() {
  const [show, setShow] = React.useState<PreviewType | null>(null);

  const showPic = (param: PreviewType | null) => {
    setShow(param);
  };

  return (
    <section className="pt-[7rem] pb-[2rem] bg-zinc-300 relative">
      <div className="lg:mx-auto max-w-5xl mx-[1.5rem]">
        <h1 className="text-[3rem] font-bold underline mb-[2rem] text-center">
          Preview lightbox
        </h1>
        <div>
          <PreviewShow onShow={show} fnoo={showPic} />
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            loop={true}
            pagination={{ clickable: true }}
            grabCursor={true}
            centeredSlides={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              700: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
            }}
            className="preview "
          >
            {imgList2.map((p, index: number) => {
              return (
                <SwiperSlide key={index} className="">
                <Image
                  src={p.img}
                  alt=""
                  width={500}
                  height={300}
                  onClick={() => showPic(p)}
                />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
