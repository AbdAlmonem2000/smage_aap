'use client'
import React from 'react'
import Slider from "react-slick";
import smage11 from "../../public/image/smage11.jpg"
import smage7 from "../../public/image/smage7.jpg"
import smage8 from "../../public/image/smage8.jpg"
import smage9 from "../../public/image/smage9.jpg"
import smage10 from "../../public/image/smage10.jpg"
import smage14 from "../../public/image/smage14.jpg"
import Image from 'next/image';
import Link from 'next/link';

export default function Mainslider() {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: "5px", padding: "15px", marginRight: "-10px", display: "flex", justifyContent: "center", alignItems: "center" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: "5px", padding: "15px", marginLeft: "-10px", display: "flex", justifyContent: "center", alignItems: "center" }}
        onClick={onClick}
      />
    );
  }

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "40px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // For screens less than 1024px wide
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screens less than 768px wide
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px", // Reduce center padding for smaller screens
        },
      },
      {
        breakpoint: 480, // For screens less than 480px wide
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px", // Reduce center padding even more for very small screens
        },
      },
    ],
  };

  return (
    <div  className="slider-container px-4 sm:px-8 lg:px-14 bg-[#000] rounded-lg py-10 mt-5">
      <h1 className="mb-5 text-xl sm:text-3xl lg:text-4xl text-red-600 italic font-extralight text-center pb-8 border-b-2">
        مركز صيانة سميج : يثق فيه العملاء
      </h1>

      <Slider  {...settings1}>
        <Link  href={'/dishwasher'} className="hover:scale-105 transition-all">
          <p className="text-lg sm:text-xl lg:text-2xl mb-4 text-center text-white">صيانة غسالة اطباق سميج</p>
          <Image data-aos="zoom-in" data-aos-duration="1000" src={smage8} className="w-full rounded-xl px-2" alt="مركز صيانة سميج" />
        </Link>

        <Link href={'/Washingmachine'} className="hover:scale-105 transition-all">
          <p className="text-lg sm:text-xl lg:text-2xl mb-4 text-center text-white">صيانة غسالة سميج</p>
          <Image data-aos="zoom-in" data-aos-duration="1000" src={smage9} className="w-full rounded-xl px-2" alt="مركز صيانة سميج" />
        </Link>

        <Link href={'/refrigerator'} className="hover:scale-105 transition-all">
          <p className="text-lg sm:text-xl lg:text-2xl mb-4 text-center text-white">صيانة ثلاجة سميج</p>
          <Image data-aos="zoom-in" data-aos-duration="1000" src={smage10} className="w-full rounded-xl px-2" alt="مركز صيانة سميج" />
        </Link>

        <Link href={'/oven'} className="hover:scale-105 transition-all">
          <p className="text-lg sm:text-xl lg:text-2xl mb-4 text-center text-white">صيانة فرن سميج</p>
          <Image data-aos="zoom-in" data-aos-duration="1000" src={smage7} className="w-full rounded-xl px-2" alt="مركز صيانة سميج" />
        </Link>

        <Link href={'/stovegas'} className="hover:scale-105 transition-all">
          <p className="text-lg sm:text-xl lg:text-2xl mb-4 text-center text-white">صيانة بوتاجاز سميج</p>
          <Image data-aos="zoom-in" data-aos-duration="1000" src={smage11} className="w-full rounded-xl px-2" alt="مركز صيانة سميج" />
        </Link>

        <Link href={'/microwave'} className="hover:scale-105 transition-all">
          <p className="text-lg sm:text-xl lg:text-2xl mb-4 text-center text-white">صيانة ميكروويف سميج</p>
          <Image data-aos="zoom-in" data-aos-duration="1000" src={smage14} className="w-full rounded-xl px-2" alt="مركز صيانة سميج" />
        </Link>
      </Slider>
    </div>
  );
}
