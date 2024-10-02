
import localFont from "next/font/local";
import Navbar from "./Navbar";
import Advertisement from "@/components/Advertisement";
import Carousel from "@/components/Carousel";
import OwlCarouselComponent from "@/components/OwlCarousel";
import TopNewCarousel from "@/components/TopNewCarousel";
import ItemSliderContent from "./ItemSliderContent";
import NewsCardContent from "./NewCardContent";
import Market from "./Market";
import TrandingTopics from '@/components/TrendingTopics';
import RightSideContent from "@/components/RightSideContent";
import MostReadableContent from '@/components/MostRedableContent'
import VideoContent from '@/components/VideoContetn'
import PhotoContent from '@/components/PhotoContetn'
import WebStore from '@/components/WebStore'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
     <div>
      {/* <Navbar/> */}

      <Advertisement/>
        <Carousel/>
       <TrandingTopics/>
       <div className="flex">
        <div className="w-[1000px]">
        <ItemSliderContent/>
        <NewsCardContent/>
         <Market/>
        </div>
        <div className="">
          <RightSideContent />
        </div>
       </div>
       
       <WebStore/>
      <div className='flex space-x-4'>
       <MostReadableContent/>
      <div className='flex'>
      <VideoContent/>
      <PhotoContent/>
      </div>
      </div>
      {/* <RightSideContent/> */}
     </div>
  );
}
