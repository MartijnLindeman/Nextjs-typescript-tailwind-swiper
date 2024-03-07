import './style.css';

import DemoSlider from "./_components/DemoSlider";
import dataSlider from "./_data/slider-data.json";

import CoverFlow from './_components/CoverFlow';
import BreakPoint from './_components/BreakPoint';
import Rewind from './_components/Rewind';
import Fade from './_components/Fade';
 import Carousel from './_components/Carousel';
 import Thumb from './_components/Thumb'; 
 import Preview from './_components/Preview';
 import GridCollumn from './_components/GridCollumn';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import 'swiper/css/effect-coverflow';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/grid';

export default function Home() {
  return (
    <main >
      <DemoSlider data={dataSlider} />
      <CoverFlow />
      <BreakPoint />
      <Rewind />
      <Fade />
      <Carousel />    
      <Thumb />   
      <Preview />     
      <GridCollumn /> 
    </main>
  );
}