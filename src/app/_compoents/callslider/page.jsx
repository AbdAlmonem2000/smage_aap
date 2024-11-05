'use client'

import React from 'react'
import Slider from "react-slick";
import smage15 from '../../public/image/smage15.png'
import Image from 'next/image';


export default function Callslider() {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", borderRadius: "5px", padding: "20px", marginRight: "-15px", display: "flex", justifyContent: "center", alignItems: "center" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", borderRadius: "5px", padding: "20px", marginLeft: "-15px", display: "flex", justifyContent: "center", alignItems: "center" }}
                onClick={onClick}
            />
        );
    }


    var settings3 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,

    }




    return <>
        <div  className="to-white bg-black flex flex-col lg:flex-row justify-center items-center p-5 rounded-lg">
            <div data-aos="zoom-in-up" data-aos-duration="1000" className="w-full lg:w-[45%] px-5">
                <Image src={smage15} className="w-full rounded-lg" alt="مركز صيانة سميج" />
            </div>

            <div  className="w-full lg:w-[45%] p-5">
                <Slider {...settings3}>
                    <div className="h-auto sm:h-[458.837px] flex flex-col justify-center items-center p-6 sm:p-10 text-white">
                        <h3 className="text-3xl font-bold text-red-600 mb-3 text-center">خدمة عملاء مركز سميج</h3>
                        <p className="italic text-base sm:text-lg leading-relaxed mb-4 text-center">
                            تُعد <strong>خدمة العملاء</strong> جزءًا أساسيًا من نجاح أي مركز صيانة، وفي مركزنا نولي اهتمامًا كبيرًا لهذا الجانب لتحقيق أعلى مستويات الرضا لدى عملائنا. نحرص دائمًا على تقديم خدمة مميزة وسريعة، حيث أن فريق <strong>خدمة العملاء</strong> لدينا مُدرب بشكل جيد ولديه الكفاءة العالية للتعامل مع مختلف الاستفسارات والشكاوى. من خلال <strong>خدمة العملاء</strong>، نضمن تقديم أفضل تجربة ممكنة، حيث نسعى دائمًا لتحقيق أعلى معايير الجودة في الرد على استفسارات العملاء وحل مشكلاتهم.
                        </p>
                        <div className="mt-6">
                            <a
                                href="tel:16062"
                                className="py-2 px-6 sm:py-3 sm:px-8 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-all text-base sm:text-xl font-bold"
                            >
                                اتصل الآن: 16062
                            </a>
                        </div>
                    </div>

                    <div className="h-auto sm:h-[458.837px] flex flex-col justify-center items-center p-6 sm:p-10 text-white">
                        <h3 className="text-3xl font-bold text-red-600 mb-3 text-center">سماع الاستفسارات</h3>
                        <p className="italic text-base sm:text-lg leading-relaxed mb-4 text-center">
                            يمتلك موظفونا الخبرة اللازمة للتعامل مع الاستفسارات المختلفة، سواء كانت بسيطة أو معقدة، ويعملون على إيجاد الحلول الأنسب لكل حالة. نحن نقدر أهمية الوقت لدى العميل، ولذلك فإننا نحرص على الرد السريع وتقديم المساعدة بشكل فوري. يعتبر فريقنا على دراية تامة بكيفية معالجة الشكاوى بأسلوب احترافي، مما يعزز الثقة بين العملاء والمركز. إذا كنت تبحث عن خدمة سريعة وفعالة، فإن <strong>خدمة العملاء</strong> لدينا هي المكان الذي يمكنك الوثوق به لحل مشكلاتك وتقديم الدعم الذي تحتاجه.
                        </p>
                        <div className="mt-6">
                            <a
                                href="tel:16062"
                                className="py-2 px-6 sm:py-3 sm:px-8 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-all text-base sm:text-xl font-bold"
                            >
                                اتصل الآن: 16062
                            </a>
                        </div>
                    </div>

                    <div className="h-auto sm:h-[458.837px] flex flex-col justify-center items-center p-6 sm:p-10 text-white">
                        <h3 className="text-3xl font-bold text-red-600 mb-3 text-center">مهام خدمة عملاء المركز</h3>
                        <p className="italic text-base sm:text-lg leading-relaxed mb-4 text-center">
                            تُعتبر <strong>خدمة العملاء</strong> عنصرًا أساسيًا في نجاح أي مركز صيانة، وفي مركزنا نضع أولوية كبيرة لهذا الجانب لضمان رضا العملاء. نحرص على توفير خدمة فعالة وسريعة، حيث يتمتع فريق <strong>خدمة العملاء</strong> لدينا بالمهارات والتدريب اللازمين للتعامل مع جميع الاستفسارات والشكاوى بكفاءة. من خلال <strong>خدمة العملاء</strong>، نلتزم بتقديم تجربة مميزة تضمن راحة العملاء ونسعى جاهدين لتلبية احتياجاتهم وحل مشكلاتهم بأعلى مستويات الجودة.
                        </p>
                        <div className="mt-6">
                            <a
                                href="tel:16062"
                                className="py-2 px-6 sm:py-3 sm:px-8 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-all text-base sm:text-xl font-bold"
                            >
                                اتصل الآن: 16062
                            </a>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>


    </>
}
