import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import './MainPage.scss';
import 'swiper/css'
import 'swiper/css/navigation';

export interface CorouselData {
  id: number;
  img: string;
  title: string;
  text: string;
}

export interface CorouselItem {
  corousel: CorouselData[];
}

const MainPage: React.FC<CorouselItem> = ({ corousel }) => {
  return (
    <div className="containerMP">
     <Swiper>
      {corousel.map((option) => (
        <>
          <SwiperSlide key={option.id}>
          <div className="cr1">
                <img src={option.img} />
              </div>
              <div className="textMP">
                <h1 className="titleMP">
                  <span>UMN DOCUMENTATION</span> <span>Portal</span>
                  <span>HELLO WORLD</span>
                </h1>
                <span className="descMP">
                  {option.text}
                </span>
              </div>
          </SwiperSlide>
        </>
      ))}
     </Swiper>
    </div>
  );
};

export default MainPage;
