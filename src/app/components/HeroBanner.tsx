"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroBanner() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  const settings = {
    customPaging: function(i:any) {
      return (
        <a>
          <img src={`/assist/bannerImg0${i}.png
`}  className="w-16"/>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <Slider {...settings}>
        <div>
          <Image
            src="/assist/bannerImg00.png"
            alt="banner 1"
            layout="responsive"
            width={800}
            height={192}
            className="object-cover"
          />
        </div>
        <div>
          <Image
             src="/assist/bannerImg01.png"
            alt="banner 2"
            layout="responsive"
            width={800}
            height={192}
            className="object-cover"
          />
        </div>
        <div>
          <Image
            src="/assist/bannerImg02.png"
            alt="banner 4"
            layout="responsive"
            width={800}
            height={192}
            className="object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}
