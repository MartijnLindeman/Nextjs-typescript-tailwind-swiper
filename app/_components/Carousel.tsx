'use client'

import * as React from 'react';

import Image from 'next/image';

import { VscZoomIn } from 'react-icons/vsc';
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "lightgallery.js/dist/css/lightgallery.css"; 


const photoscarous = [
  'https://images.pexels.com/photos/12847318/pexels-photo-12847318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/6317484/pexels-photo-6317484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/12913422/pexels-photo-12913422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/10890735/pexels-photo-10890735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/11598957/pexels-photo-11598957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2806492/pexels-photo-2806492.jpeg?auto=compress&cs=tinysrgb&w=1600',
];

type CarouselProbs = {
  image: string;
  thumb?: any;
  group: string;
};

export default function Carousel() {
  const PhotoItem = (probs: CarouselProbs) => (
    <div className="relative group">
      <LightgalleryItem
        group={probs.group}
        src={probs.image}
        thumb={probs.thumb}
      >
        <Image src={probs.image} className="rounded-xl w-full" alt="Food" width={1260} height={750} />
        <div className="absolute hidden group-hover:block w-full h-full left-0 rounded-xl top-0 group-hover:bg-black/40">
          <VscZoomIn className="absolute top-1/2 left-1/2 -tranlate-x-1/2 -translate-y-1/2 text-white" />
        </div>
      </LightgalleryItem>
    </div>
  );

  return (
    <section className="pt-[7rem] pb-[2rem] bg-stone-100">
      <div className="lg:mx-auto max-w-5xl mx-[1.5rem]">
        <h1 className="text-[3rem] font-bold underline mb-[2rem] text-center">
          Carousel + lightbox
        </h1>
        <LightgalleryProvider>
          <Swiper
            modules={[Pagination]}
            loop={false}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{
              clickable: true,
            }}
            grabCursor={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              425: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="carousel"
          >
            {photoscarous.map((p, index) => (
              <SwiperSlide key={index}>
                <PhotoItem image={p} group="group2" />
              </SwiperSlide>
            ))}
          </Swiper>
        </LightgalleryProvider>
      </div>
    </section>
  );
}