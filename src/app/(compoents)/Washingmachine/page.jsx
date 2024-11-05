'use client'

import React from 'react'
import Slider from "react-slick";
import smage17 from "../../public/image/washingMachines/smage17.jpg"
import smage18 from "../../public/image/washingMachines/smage18.jpg"
import smage19 from "../../public/image/washingMachines/smage19.jpg"
import smage20 from "../../public/image/washingMachines/smage20.jpg"
import smage21 from "../../public/image/washingMachines/smage21.jpg"
import smage22 from "../../public/image/washingMachines/smage23.jpg"
import smage25 from "../../public/image/washingMachines/smage22.jpg"
import Image from "next/image";
import Mainslider from '@/app/_compoents/mainslider/page';
import Callslider from '@/app/_compoents/callslider/page';
import { useState, useEffect } from 'react';
import { ClockLoader } from "react-spinners";

export default function Washingmachine() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  var settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    fade: true,
    waitForAnimate: false
  };


  return (
    <>

      <div>
        {loading ? (<div className="h-[100vh] flex justify-center items-center"><ClockLoader color="#000" loading={loading} size={100} /></div>) : (
          <div className='px-10'>
            <div className='flex flex-col md:flex-row items-center justify-center  mb-3'>
              {/* Slider Section (photo first on small screens) */}
              <div className='w-full md:w-[50%] p-4 order-first md:order-last'>
                <Slider {...settings}>
                  <div>
                    <Image src={smage17} className="rounded-lg w-full" alt="مركز صيانة غسالة سميج" />
                  </div>
                  <div>
                    <Image src={smage18} className="rounded-lg w-full" alt="مركز صيانة غسالة سميج" />
                  </div>
                  <div>
                    <Image src={smage19} className="rounded-lg w-full" alt="مركز صيانة غسالة سميج" />
                  </div>

                </Slider>
              </div>

              {/* Text Section (appears second on small screens) */}
              <div className='w-full md:w-[50%] '>
                <div data-aos="fade-left" data-aos-duration="1000">
                  <h1 className=" text-2xl sm:text-4xl lg:text-5xl mb-12 text-red-600 italic font-extralight text-center"> مركز صيانة غسالة سميج</h1>
                  <p className="text-sm md:text-base lg:text-lg italic font-extralight mb-5">
                    خدمة صيانة غسالة سميج وتوكيل سميج في مصر، نقدم صيانه لجميع أنواع الغسالات من سميج. اتصل بنا الآن على الخط الساخن:<span className='text-red-600 font-bold'>16062،</span>.
                    تقدم خدمة صيانة غسالة سميج للغسالات في مصر حلاً موثوقًا وفعّالًا لجميع مشاكل أجهزتك. كوننا توكيل معتمد لسميج، نؤمن بأهمية الصيانة الدورية للحفاظ على أداء الغسالة بكفاءة عالية وتمكينه من العمل بأفضل حالاته.  </p>
                  <p className='pb-5 text-sm md:text-base lg:text-lg italic font-extralight'> يمكنك الاعتماد علينا لتقديم خدمات الصيانة المتخصصة التي تشمل التشخيص السريع، والإصلاح المهني، واستبدال القطع الغير صالحة للاستخدام، وضمان استمرار عمل جهازك بأقصى كفاءة. بغض النظر عن نوع المشكلة التي تواجهها مع غسالة سميج الخاص بك، فإننا هنا لمساعدتك بخبرتنا ومهارتنا. اتصل بنا الآن على الخط الساخن:  <span className='text-red-600 font-bold'>16062،</span> وسنكون سعداء بخدمتك.
                  </p>

                </div>
              </div>
















            </div>





            <div data-aos="zoom-in-up" data-aos-duration="1000" className='flex flex-wrap justify-center items-center'>
              <div className='w-full sm:w-1/2 lg:w-1/3 p-3 '>
                <div className='border p-4 border-black rounded-lg '>
                  <div className='text-center'>
                    <i className="text-5xl mt-3 fa-solid fa-screwdriver-wrench"></i>
                    <h3 className='mb-3 text-2xl text-red-500'>قطع غيار سميج</h3>
                    <p>نحن نقدم قطع الغيار الأصلية والمعتمدة لأجهزة سميج بأسعار مناسبة وتنافسية. تأكد من جودة وموثوقية قطع الغيار التي نوفرها لك.</p>
                  </div>
                </div>
              </div>

              <div className='w-full sm:w-1/2 lg:w-1/3 p-3 '>
                <div className='border p-4 border-black rounded-lg '>
                  <div className='text-center'>
                    <i className="text-5xl mt-3 fa-solid fa-wrench"></i>
                    <h3 className='mb-3 text-2xl text-red-500'>ضمان سميج</h3>
                    <p>نحن نفخر بتقديم ضمان سميج موثوق ومضمون على صيانة غسالة سميج. يمكنك الاعتماد على ضماننا لتوفير الحماية والاطمئنان بشأن جودة منتجاتنا.</p>
                  </div>
                </div>
              </div>

              <div className='w-full sm:w-1/2 lg:w-1/3 p-3 '>
                <div className='border p-4 border-black rounded-lg '>
                  <div className='text-center'>
                    <i className="text-5xl mt-3 fa-solid fa-fire"></i>
                    <h3 className='mb-3 text-2xl text-red-500'>الخط الساخن سميج</h3>
                    <p>اتصل الآن بالخط الساخن لخدمة صيانة غسالة سميج على الرقم 16062 للحصول على الدعم والمساعدة اللازمة في صيانة وإصلاح غسالاتك وضمان عملها بكفاءة عالية.</p>
                  </div>
                </div>
              </div>
            </div>















            <div className='bg-white py-20  rounded-lg mt-2'>
              <h1 className="mb-5 text-2xl sm:text-4xl lg:text-5xl  text-red-600 italic font-extralight text-center pb-8 border-b-2"> مركز صيانة غسالات سميج : يثق فيه العملاء</h1>

              <div className='flex flex-wrap justify-center items-center '>

                <div data-aos="zoom-in-up" data-aos-duration="1000" className='w-full lg:w-1/2 p-4  items-center '>
                  <div className='p-11'>
                    <Image src={smage20} className="rounded-lg w-full" alt="مركز صيانة غسالة سميج" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-3 text-red-600 py-2 "> صيانة غسالات سميج</h3>
                  <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                    يعد مركز صيانة غسالة سميج مكانًا موثوقًا به لإصلاح وصيانة غسالات سميج في مصر. يتخصص المركز في تقديم خدمات صيانة شاملة لضمان أن جهازك يعمل بأفضل حالاته دائمًا.
                  </p>
                  <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                    يُعتبر  صيانة غسالة سميج جهة موثوقة لإصلاح وصيانة غسالات سميج في مصر، حيث يختص بتقديم خدمات صيانة متكاملة تضمن الحفاظ على جهازك ليعمل بأفضل كفاءة ممكنة دائمًا.      </p>
                  <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                    عندما يحدث خلل في غسالة سميج الخاص بك، فإنه يمكن أن يؤثر ذلك سلبًا على روتينك اليومي في المطبخ. ولكن مع مركز صيانة غسالة سميج، يمكنك الاعتماد على فريق الفنيين المدربين تدريباً عالياً لإصلاح المشاكل بسرعة وكفاءة.
                  </p>
                  <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                    تشمل خدمات المركز إصلاح جميع أنواع المشاكل التي قد تواجهها غسالات سميج، سواء كانت مشاكل في الإضاءة، أو الحرارة، أو التحكم في الغاز، أو أية مشكلات أخرى. بالإضافة إلى ذلك، يوفر المركز قطع الغيار الأصلية لضمان استبدال الأجزاء التالفة بأجزاء ذات جودة عالية.
                  </p>

                  <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                    سواء كنت تواجه مشكلة فنية أو ترغب في إجراء صيانة دورية لغسالةك، يمكنك الاعتماد على مركز صيانة غسالة سميج لتلبية جميع احتياجاتك. يعمل المركز على مدار الساعة لتقديم الدعم والمساعدة لعملائه، بغض النظر عن حجم المشكلة أو تعقيدها.
                  </p>
                  <p className='pb-5 text-lg sm:text-xl font-extralight py-2'>
                    إذا كنت تبحث عن مركز صيانة موثوق به ومحترف لغسالة سميج في مصر، فلا تتردد في الاتصال بمركز صيانة غسالة سميج الآن للحصول على الخدمة الفورية .
                  </p>

                </div>


                <div data-aos="zoom-in-up" data-aos-duration="1000" className='w-full lg:w-1/2 p-4 '>
                  <div className='p-11'>
                    <Image src={smage21} className="rounded-lg w-full" alt="مركز صيانة غسالة سميج" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-3 text-red-600 py-2"> توكيل غسالات سميج</h3>

                    <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                      تعتبر سميج واحدة من الشركات الرائدة في صناعة الأجهزة المنزلية، وخاصةً في مجال صناعة الغسالات. تمتاز منتجاتها بالجودة العالية والمتانة، إلا أنه في بعض الأحيان قد تحتاج غسالات سميج إلى صيانة لضمان استمرارية أدائها العالي وسلامة استخدامها في المنزل.
                    </p>
                    <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                      تفهم شركة سميج أهمية الصيانة الدورية لمنتجاتها، ولذلك فإنها تقدم خدمات الصيانة عبر شبكة وكلاء معتمدين. ومن بين هؤلاء الوكلاء يتميز توكيل صيانة غسالة سميج بالاحترافية والخبرة في إصلاح وصيانة غسالات سميج بجميع أنواعها وموديلاتها.
                    </p>
                    <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                      يقدم توكيل صيانة غسالة سميج مجموعة واسعة من الخدمات التي تشمل الصيانة الدورية الوقائية وإصلاح الأعطال، سواء كانت كبيرة أو صغيرة. يعتمد فريق الصيانة في التوكيل على فنيين مدربين ومؤهلين تأهيلاً عالياً، يمتلكون المهارات اللازمة للتعامل مع جميع مشاكل الغسالات بكفاءة وفعالية.
                    </p>
                    <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                      بفضل التكنولوجيا المتطورة والأدوات المتخصصة التي يتمتع بها توكيل صيانة غسالة سميج، يتمكن الفنيون من تشخيص المشاكل بدقة وسرعة، وإجراء الإصلاحات اللازمة بأعلى مستويات الجودة. بالإضافة إلى ذلك، يتم استخدام قطع الغيار الأصلية في جميع الإصلاحات لضمان استمرارية أداء الغسالة بكفاءة عالية.
                    </p>
                    <p className='pb-5 text-lg sm:text-xl font-extralight py-2'>
                      تتميز خدمات توكيل صيانة غسالة سميج بالسرعة والموثوقية، حيث يهدف الفريق إلى تقديم الخدمة في أسرع وقت ممكن دون التأثير على جودة العمل. بالإضافة إلى ذلك.
                    </p>
                  </div>
                </div>
              </div>
            </div>

















            <div className='flex flex-col lg:flex-row justify-center items-center p-4'>
              <div data-aos="fade-left" data-aos-duration="1000" className='w-full lg:w-[50%] p-4'>
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-3 text-red-600 py-2">خدمة عملاء صيانة غسالة سميج</h3>
                  <p className='pb-5 text-base sm:text-lg md:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                    تُعتبر خدمة العملاء في مركز صيانة غسالة سميج الركيزة الأساسية لتوفير تجربة استثنائية للعملاء. يُعَدُّ خط الساخن الخاص بالصيانة رقم 16062 نقطة الاتصال الرئيسية التي يتواصل من خلالها العملاء لطلب الخدمة وطرح استفساراتهم.
                  </p>
                  <p className='pb-5 text-base sm:text-lg md:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                    تتميز خدمة عملاء صيانة غسالة سميج بالاحترافية والودية، حيث يُوجه فريق خدمة العملاء كل جهد لضمان رضا العملاء وتلبية احتياجاتهم بأسرع وقت ممكن. يُعتبر تلبية احتياجات العملاء وفهم مشاكلهم ومخاوفهم أولوية قصوى بالنسبة للفريق.
                  </p>
                  <p className='pb-5 text-base sm:text-lg md:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                    سواء كنت بحاجة إلى جدولة زيارة للصيانة الدورية، أو كنت تواجه مشكلة مع غسالةك وتحتاج إلى إصلاح سريع، يتم تلبية جميع طلبات العملاء بكفاءة وفعالية. يسعى فريق خدمة العملاء دائمًا إلى تقديم التوجيه الصحيح والمساعدة اللازمة للعملاء لحل مشاكلهم بأسرع وقت ممكن.
                  </p>
                  <p className='pb-5 text-base sm:text-lg md:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                    بالإضافة إلى ذلك، يُوفِّر خط الساخن للصيانة الذي يعمل على مدار الساعة والذي يحمل الرقم 16062 قناة فعالة للتواصل مع العملاء في أي وقت وفي أي حالة طوارئ. يتم استقبال المكالمات بكفاءة عالية، ويتم توجيهها إلى الفريق المناسب للتعامل معها بأسرع وقت ممكن.
                  </p>
                  <p className='pb-5 text-base sm:text-lg md:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                    يتميز فريق خدمة العملاء في صيانة غسالة سميج بالاستجابة السريعة والمهنية لجميع استفسارات العملاء ومشاكلهم. يسعى الفريق دائمًا لتقديم تجربة عملاء ممتازة من خلال توفير الدعم والمساعدة اللازمة في كل خطوة من خطوات عملية الصيانة.
                  </p>
                  <p className='pb-5 text-base sm:text-lg md:text-xl font-extralight border-black py-2'>
                    باختصار، تعتبر خدمة عملاء صيانة غسالة سميج الشريك الثقة الذي يقدم الدعم اللازم ويضمن رضا العملاء في كل مرحلة من مراحل عملية الصيانة. تُعَدُّ فعالية خدمة العملاء واحترافيتها عنصرًا أساسيًا في تحقيق مركز صيانة غسالة ملابس سميج لمكانة رائدة في مجال الصيانة والإصلاح.
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-[50%] p-4'>
                <div className='p-9'>
                  <Image src={smage22} className="rounded-lg w-full h-auto" alt="مركز صيانة غسالة ملابس سميج" />
                </div>
              </div>
            </div>




            <Callslider></Callslider>

            <div className='mt-10 bg-white p-10 rounded-lg'>
              <h3 className="mb-5 text-2xl sm:text-4xl lg:text-5xl  text-red-600 italic font-extralight text-center pb-8 border-b-2"> مركز صيانة غسالات سميج : الخط الساخن سميج 16062</h3>

              <Image src={smage25} className="rounded-lg w-full" alt="مركز صيانة غسالة ملابس سميج" />

              <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                تُعتبر غسالات  من سميج خيارًا شائعًا للكثير من المنازل والمطابخ، حيث تجمع بين الأداء العالي والتصميم الأنيق. ومع ذلك، تحتاج هذه الأجهزة المدمجة إلى الرعاية والصيانة المنتظمة للحفاظ على أدائها الممتاز والحد من حدوث المشاكل.


              </p>



              <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                تقدم خدمة صيانة غسالات سميج الرعاية الشاملة التي تحتاجها غسالة ملابسك المدمج. يضمن فريق الصيانة المدربون تدريبًا عاليًا وخبرة واسعة في معالجة جميع أنواع المشاكل التي قد تواجه غسالة ملابسك ، بدءًا من المشاكل الميكانيكية إلى الأعطال الكهربائية وغيرها.


              </p>


              <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                يشمل برنامج صيانة غسالات سميج فحصًا دوريًا وشاملاً لجميع مكونات الغسالة ملابس، بما في ذلك الشعلات، والغسالة ملابس، وأنظمة التحكم، والعناصر الداخلية الأخرى. يتم تنظيف الأجزاء بعناية وفحصها لضمان عملها بكفاءة عالية وأدائها الممتاز.


              </p>


              <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                بالإضافة إلى الصيانة الدورية، يتم تقديم خدمة إصلاح الأعطال بكفاءة عالية في حال حدوث أي مشكلة غير متوقعة مع غسالات سميج. يستخدم الفنيون المهارة والخبرة لتشخيص المشكلة بدقة وإصلاحها بسرعة وفعالية لاستعادة أداء الجهاز بأسرع وقت ممكن.


              </p>


              <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                تتوفر قطع الغيار الأصلية من سميج لضمان أن يتم استبدال أي جزء تالف بأجزاء عالية الجودة ومتوافقة تمامًا مع غسالة ملابسك. هذا يضمن استمرارية أداء الجهاز وتجنب المشاكل المستقبلية التي قد تنشأ عن استخدام قطع غيار غير أصلية.


              </p>


              <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                مع خدمة صيانة غسالة ملابس سميج غسالات، يمكنك الاطمئنان إلى أن جهازك المدمج سيحظى بالعناية اللازمة للحفاظ على جودته وأدائه على المدى الطويل. يمثل مركز صيانة غسالة ملابس سميج الشريك المثالي للعملاء الذين يبحثون عن الاعتمادية والجودة في صيانة غسالاتهم .


              </p>


              <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                تعتبر صيانة غسالة ملابس سميج أمرًا حيويًا لضمان استمرارية أداء جهازك بكفاءة عالية وتحقيق أقصى قدر من الأداء والمتانة. تتميز غسالات سميج بالجودة العالية والتصميم الأنيق، ولكنها تحتاج أيضًا إلى الرعاية والصيانة المنتظمة لضمان استمرار عملها بكفاءة.



              </p>


              <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>

                تتضمن خدمة صيانة غسالة ملابس سميج العديد من الخطوات الأساسية للحفاظ على جهازك بحالة ممتازة. تشمل هذه الخدمات التفتيش الدوري والتنظيف الشامل لجميع أجزاء الغسالة ملابس، بما في ذلك الشعلات والغسالة ملابس والمواقد والأجزاء الداخلية الأخرى. كما تشمل الصيانة أيضًا فحص الأجزاء الميكانيكية والكهربائية لضمان عملها بكفاءة.


              </p>


              <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>

                يقدم مركز صيانة غسالة ملابس سميج للغسالات خدمات صيانة شاملة ومتخصصة تشمل الإصلاحات الضرورية لأي مشكلة قد تظهر. يتمتع فريق الفنيين بالمهارات والخبرة اللازمة لتشخيص وإصلاح مجموعة متنوعة من المشاكل، سواء كانت كبيرة أو صغيرة، بشكل سريع وفعال.


              </p>


              <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>

                بالإضافة إلى ذلك، يُوفِّر مركز صيانة غسالة ملابس سميج قطع الغيار الأصلية التي يحتاجها غسالة ملابسك، مما يضمن استبدال الأجزاء التالفة بأجزاء عالية الجودة ومتوافقة تمامًا مع جهازك. هذا يعزز الأداء والمتانة العامة للغسالة ويطيل عمره الافتراضي.


              </p>


              <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                تتميز خدمة صيانة غسالة سميج بالاحترافية والموثوقية، حيث يهدف الفريق إلى تقديم تجربة سلسة ومريحة للعملاء. يُوفِّر الخط الساخن رقم 16062 قناة تواصل مباشرة مع مركز الصيانة، مما يسهل على العملاء طلب الخدمة أو طرح استفساراتهم بسرعة وسهولة.



              </p>


              <p className='pb-5 text-lg sm:text-xl font-extralight  py-2'>

                توفر صيانة غسالة سميج الرعاية والصيانة الشاملة لجهازك المنزلي، مما يضمن عمله بكفاءة عالية ويحافظ على أدائه الأمثل على المدى الطويل. يمثل مركز صيانة غسالة سميج الخيار الأمثل للعملاء الذين يبحثون عن الجودة والموثوقية في خدمات الصيانة والإصلاح.


              </p>



            </div>







            <div className='flex flex-col lg:flex-row justify-center items-center p-4'>
              <div className='w-full lg:w-[45%] p-4'>
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-3 text-red-600 py-2">خدمة عملاء صيانة غسالة سميج</h3>
                  <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                    تُعتبر خدمة العملاء في مركز صيانة غسالة سميج الركيزة الأساسية لتوفير تجربة استثنائية للعملاء. يُعَدُّ خط الساخن الخاص بالصيانة رقم 16062 نقطة الاتصال الرئيسية التي يتواصل من خلالها العملاء لطلب الخدمة وطرح استفساراتهم.
                  </p>
                  <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                    تتميز خدمة عملاء صيانة غسالة سميج بالاحترافية والودية، حيث يُوجه فريق خدمة العملاء كل جهد لضمان رضا العملاء وتلبية احتياجاتهم بأسرع وقت ممكن. يُعتبر تلبية احتياجات العملاء وفهم مشاكلهم ومخاوفهم أولوية قصوى بالنسبة للفريق.
                  </p>
                  <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                    سواء كنت بحاجة إلى جدولة زيارة للصيانة الدورية، أو كنت تواجه مشكلة مع غسالةك وتحتاج إلى إصلاح سريع، يتم تلبية جميع طلبات العملاء بكفاءة وفعالية. يسعى فريق خدمة العملاء دائمًا إلى تقديم التوجيه الصحيح والمساعدة اللازمة للعملاء لحل مشاكلهم بأسرع وقت ممكن.
                  </p>
                  <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                    بالإضافة إلى ذلك، يُوفِّر خط الساخن للصيانة الذي يعمل على مدار الساعة والذي يحمل الرقم 16062 قناة فعالة للتواصل مع العملاء في أي وقت وفي أي حالة طوارئ. يتم استقبال المكالمات بكفاءة عالية، ويتم توجيهها إلى الفريق المناسب للتعامل معها بأسرع وقت ممكن.
                  </p>
                  <p className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                    يتميز فريق خدمة العملاء في صيانة غسالة سميج بالاستجابة السريعة والمهنية لجميع استفسارات العملاء ومشاكلهم. يسعى الفريق دائمًا لتقديم تجربة عملاء ممتازة من خلال توفير الدعم والمساعدة اللازمة في كل خطوة من خطوات عملية الصيانة.
                  </p>
                  <p className='pb-5 text-lg sm:text-xl font-extralight border-black py-2'>
                    باختصار، تعتبر خدمة عملاء صيانة غسالة سميج الشريك الثقة الذي يقدم الدعم اللازم ويضمن رضا العملاء في كل مرحلة من مراحل عملية الصيانة. تُعَدُّ فعالية خدمة العملاء واحترافيتها عنصرًا أساسيًا في تحقيق مركز صيانة غسالة سميج لمكانة رائدة في مجال الصيانة والإصلاح.
                  </p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-duration="1000" className='w-full lg:w-[55%]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                  <div className=''>
                    <Image src={smage17} className="rounded-lg w-full" alt="مركز صيانة غسالة سميج" />
                  </div>
                  <div className=''>
                    <Image src={smage18} className="rounded-lg w-full" alt="مركز صيانة غسالة سميج" />
                  </div>
                  <div className=''>
                    <Image src={smage19} className="rounded-lg w-full" alt="مركز صيانة غسالة سميج" />
                  </div>
                  <div className=''>
                    <Image src={smage22} className="rounded-lg w-full" alt="مركز صيانة غسالة سميج" />
                  </div>
                </div>
              </div>
            </div>




            <div className='bg-white rounded-lg'> <div className='p-11 '> <h5 className='mb-5 text-2xl sm:text-4xl lg:text-5xl text-red-600 italic font-extralight text-center pb-8 border-b-2'>مركز صيانة غسالات سميج 16062: الجودة والموثوقية في خدمة عملاء سميج</h5> <p className='font-medium'>يعتبر مركز صيانة غسالات سميج 16062 الوجهة المثالية للعملاء الباحثين عن أفضل خدمات الصيانة لأجهزة سميج المنزلية. يتمتع مركزنا بخبرة واسعة في صيانة غسالات سميج، حيث يعتمد على فريق من الفنيين المعتمدين والمجهزين بأحدث التقنيات اللازمة للتعامل مع جميع أنواع الأعطال.</p>
              <h2 className='text-3xl py-6 text-red-600 '>خدمة عملاء سميج وتواصل مميز على الخط الساخن 16062</h2>
              <div data-aos="flip-up" data-aos-duration="1000">
<p className='font-medium'>يقدم مركز صيانة غسالات سميج خدمة عملاء مميزة يمكن الوصول إليها بسهولة عبر الخط الساخن صيانة سميج 16062، مما يتيح للعملاء التحدث مباشرة مع فريق متخصص قادر على تقديم الاستشارات والإرشادات اللازمة لحل المشاكل أو طلب خدمة صيانة فورية.</p>

              <ul className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                <li className='mb-2'><strong>الدعم الفني المتواصل:</strong> فريق خدمة عملاء سميج جاهز لاستقبال المكالمات طوال الأسبوع، مما يساعد على تقديم الدعم الفني السريع وتلبية استفسارات العملاء.</li>
                <li className='mb-2'><strong>إرشادات الصيانة الذاتية:</strong> يقدم فريق خدمة العملاء إرشادات مهمة تساعد العملاء على صيانة غسالات سميج بشكل دوري.</li>
                <li className='mb-2'><strong>تحديد موعد الصيانة:</strong> يسهل الخط الساخن ترتيب مواعيد الصيانة المنزلية بسرعة وفقًا لمواعيد العميل.</li>
              </ul>

    
              </div>
                        <h2 className='text-3xl py-6 text-red-600 '>لماذا تختار مركز صيانة غسالات سميج 16062؟</h2>
              <div data-aos="flip-up" data-aos-duration="1000">
<p className='font-medium'>نحن في مركز صيانة غسالات سميج نضمن الجودة والأمان، مع الحرص على تلبية احتياجات عملائنا بأعلى مستويات الاحترافية. نتميز بعدة عناصر تجعلنا الخيار الأول للعملاء:</p>

              <ul className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                <li className='mb-2'><strong>فريق فني محترف:</strong> يتمتع فريقنا بخبرة واسعة في صيانة غسالات سميج، حيث يخضعون لتدريبات متقدمة لضمان أعلى مستوى من الكفاءة.</li>
                <li className='mb-2'><strong>قطع غيار غسالات سميج الأصلية:</strong> نستخدم قطع غيار أصلية فقط لضمان استمرارية أداء الأجهزة بعد الصيانة.</li>
                <li className='mb-2'><strong>استجابة سريعة:</strong> عبر رقم صيانة سميج 16062، نقدم خدمات سريعة للحالات الطارئة.</li>
                <li className='mb-2'><strong>الضمانات الممتدة:</strong> بعد إتمام الصيانة، نوفر ضمانات على العمل وقطع الغيار لضمان رضا العميل.</li>
              </ul>
              </div>
              

              <h2 className='text-3xl py-6 text-red-600 '>صيانة غسالات سميج: ضمان الكفاءة والجودة</h2>
              <div data-aos="flip-up" data-aos-duration="1000">
<p className='font-medium'>تحتاج غسالات سميج إلى صيانة دورية للحفاظ على أدائها وكفاءتها. يعمل مركز صيانة غسالات سميج بتقنيات حديثة لفحص الأعطال وتحديد الأسباب الأساسية، حيث نحرص على معالجة جميع المشكلات، من مشاكل الدوران إلى الأجزاء الداخلية الحساسة.</p>

              <ul className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                <li className='mb-2'><strong>صيانة دورية:</strong> ننصح عملاءنا بإجراء صيانة دورية للغسالة لضمان عملها بسلاسة ولفترة طويلة.</li>
                <li className='mb-2'><strong>إصلاح أعطال الماء والكهرباء:</strong> نعالج جميع أنواع أعطال غسالات سميج، سواء كانت تتعلق بالماء أو بالأجزاء الكهربائية.</li>
                <li className='mb-2'><strong>فحص الأمان:</strong> يقوم فريقنا بفحص شامل للتأكد من أمان الجهاز وتجنب أي مشاكل قد تؤثر على سلامة المستخدم.</li>
              </ul>

    
              </div>
                        <h2 className='text-3xl py-6 text-red-600 '>قطع غيار غسالات سميج الأصلية: الجودة والأداء العالي</h2>
              <div data-aos="flip-up" data-aos-duration="1000">
<p className='font-medium'>إن استخدام قطع الغيار الأصلية يُعد أساسًا لضمان عمل غسالات سميج بكفاءة عالية بعد الصيانة. في مركز صيانة غسالات سميج، نقدم قطع غيار أصلية تضمن الأداء الأمثل، كما أن فريقنا يحرص على تركيبها بعناية لتجنب أي مشاكل مستقبلية.</p>

              <ul className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                <li className='mb-2'><strong>توفير قطع الغيار:</strong> لدينا مخزون شامل من قطع غيار غسالات سميج الأصلية لجميع الموديلات.</li>
                <li className='mb-2'><strong>ضمانات على قطع الغيار:</strong> نحرص على تقديم ضمانات على القطع التي يتم تركيبها لضمان رضا العملاء وثقتهم.</li>
                <li className='mb-2'><strong>دقة التركيب:</strong> يتم تركيب قطع الغيار الأصلية بعناية فائقة لضمان عمل الجهاز بكفاءة بعد الصيانة.</li>
              </ul>

    
              </div>
                        <h2 className='text-3xl py-6 text-red-600 '>خدمات صيانة سميج المنزلية لراحة عملائنا</h2>
              <div data-aos="flip-up" data-aos-duration="1000">
<p className='font-medium'>يقدم مركز صيانة غسالات سميج خدمات صيانة منزلية توفر راحة العملاء وتجنبهم عناء نقل الجهاز. يقوم فريقنا بزيارة المنزل لإجراء الصيانة الفورية وحل المشكلات في مكانها.</p>

              <ul className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                <li className='mb-2'><strong>توفير الوقت والجهد:</strong> فريقنا جاهز للوصول إلى العميل وتقديم الصيانة دون الحاجة لنقل الجهاز.</li>
                <li className='mb-2'><strong>التشخيص السريع:</strong> يتم تشخيص المشكلات وحلها بسرعة دون التأثير على راحة العميل.</li>
                <li className='mb-2'><strong>التعامل مع الأعطال في مكانها:</strong> يتيح هذا الخيار إصلاح الأعطال بأمان دون حاجة لنقل الجهاز.</li>
              </ul>

    
              </div>
                        <h2 className='text-3xl py-6 text-red-600 '>تصليح غسالات سميج بكفاءة عالية</h2>
              <div data-aos="flip-up" data-aos-duration="1000">
<p className='font-medium'>تقدم خدمة تصليح غسالات سميج في مركزنا حلولاً شاملة لأي أعطال قد تظهر في الغسالة، مع توفير فريق متخصص في الإصلاح يضمن عودة الجهاز لأفضل أداء.</p>

              <ul className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                <li className='mb-2'><strong>إصلاح العطل بسرعة:</strong> نتفهم أهمية عودة الغسالة للعمل، لذلك نحرص على تقديم خدمة تصليح سريعة.</li>
                <li className='mb-2'><strong>تشخيص دقيق:</strong> باستخدام أدوات متقدمة، يتم تشخيص العطل بدقة لضمان حل المشكلة من جذورها.</li>
                <li className='mb-2'><strong>ضمانات على التصليح:</strong> نقدم ضمانات طويلة الأمد على خدمات التصليح لضمان راحة العملاء.</li>
              </ul>

    
              </div>
                        <h2 className='text-3xl py-6 text-red-600 '>فني صيانة سميج المعتمد</h2>
              <div data-aos="flip-up" data-aos-duration="1000">
<p className='font-medium'>نعتمد في مركز صيانة غسالات سميج على فريق من الفنيين المدربين والمعتمدين لتقديم خدمات تصليح غسالات سميج بشكل محترف. يتميز الفنيون بخبرة كبيرة واطلاع دائم على أحدث التقنيات المستخدمة في صيانة أجهزة سميج.</p>

              <ul className='pb-5 text-lg sm:text-xl font-extralight border-b-2 border-dashed border-black py-2'>
                <li className='mb-2'><strong>مهارات عالية:</strong> يتمتع الفنيون بخبرات واسعة في التعامل مع أعطال الغسالات المختلفة.</li>
                <li className='mb-2'><strong>تدريبات دورية:</strong> يخضع الفريق لتدريبات مستمرة لضمان تقديم خدمة صيانة بجودة عالية.</li>
                <li className='mb-2'><strong>احترام مواعيد العملاء:</strong> يلتزم الفنيون بالمواعيد المحددة لضمان راحة العملاء.</li>
              </ul>






              </div>
              
              <p className='font-medium py-6'>لا تتردد في الاتصال بمركز صيانة غسالات سميج 16062 للحصول على أفضل خدمات الصيانة، حيث يضمن لك فريقنا الحلول السريعة والموثوقة لجميع احتياجاتك. نحن هنا لخدمتكم بكل احترافية.</p>
            </div>
            </div>





            <Mainslider></Mainslider>





          </div>
        )}
      </div>


    </>
  );
}
