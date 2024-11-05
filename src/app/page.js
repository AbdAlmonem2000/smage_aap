'use client'

import Image from "next/image";
import smage2 from "../app/public/image/smage2.jpg"
import smage1 from "../app/public/image/smage1.jpg"
import smage3 from "../app/public/image/smage3.jpg"
import stove2 from "../app/public/image/stove2.jpg"
import stove4 from "../app/public/image/smage4.jpg"
import smage5 from "../app/public/image/smage5.jpeg"
import smage6 from "../app/public/image/smage6.jpg"
import smage12 from "../app/public/image/smage12.jpg"
import Slider from "react-slick";
import Mainslider from "./_compoents/mainslider/page";
import Callslider from "./_compoents/callslider/page";
import { useState, useEffect } from 'react';
import { ClockLoader } from "react-spinners";








export default function Home() {


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





  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return <>

  <div>

  {loading ?  ( <div className="h-[100vh] flex justify-center items-center "><ClockLoader color="#000" loading={loading} size={100}  /></div>) :( <> <Slider {...settings}>
      <div>
        <Image src={smage1} className="w-[100%] " alt="مركز صيانة سميج"></Image>
      </div>
      <div>
        <Image src={smage2} className="w-[100%] " alt="مركز صيانة سميج"></Image>
      </div>
      <div>
        <Image src={smage3} className="w-[100%] " alt="مركز صيانة سميج"></Image>
      </div>
     

    </Slider>


    <div className=" px-14 bg-[#000] rounded-lg py-6">
      <Mainslider></Mainslider>

      <h1 className='text-5xl text-center my-2 text-[#ADD1EC]'>توكيل صيانة سميج</h1>
      <p className='text-white text-center mx-auto border-b-2 border-emerald-400 mb-3 font-extralight'>يعد <strong>توكيل صيانة سميج</strong> الوجهة المثلى لجميع احتياجات الصيانة للأجهزة المنزلية الخاصة بك. نحن نقدم خدمات صيانة شاملة لكل من الغسالات، الأفران، الثلاجات، غسالات الأطباق، وغسالات الملابس من سميج، معتمدين على فريق فني متخصص ومدرب على أعلى مستوى لضمان تقديم أفضل خدمة.</p>

      <h2 className='text-[#b8d759] text-2xl'>صيانة غسالات سميج :</h2>
      <p className='text-white text-center mx-auto border-b-2 border-emerald-400 mb-3 font-extralight'>تقدم <strong>صيانة غسالات سميج</strong> خدمات إصلاح وصيانة متقدمة للتعامل مع كافة الأعطال التي قد تواجه غسالات الملابس. سواء كان الأمر يتعلق بمشكلة في التصريف، الدوران، أو الأداء العام، فريقنا لديه الخبرة والتدريب اللازمين للتعامل مع جميع المشاكل باستخدام أحدث المعدات وقطع الغيار الأصلية.</p>

      <h2 className='text-[#b8d759] text-2xl'>صيانة أفران سميج :</h2>
      <p className='text-white text-center mx-auto border-b-2 border-emerald-400 mb-3 font-extralight'>توفر <strong>صيانة أفران سميج</strong> حلولًا سريعة وفعالة لإصلاح الأفران من جميع الأنواع. سواء كانت المشكلة تتعلق بعدم تسخين الفرن أو عدم توزيع الحرارة بالتساوي، فإن فريقنا يضمن إعادة الفرن إلى حالته المثلى بفضل خبرته في التعامل مع كافة موديلات أفران سميج.</p>

      <h2 className='text-[#b8d759] text-2xl'>صيانة ثلاجات سميج :</h2>
      <p className='text-white text-center mx-auto border-b-2 border-emerald-400 mb-3 font-extralight'>بفضل فريق من الفنيين المتخصصين في <strong>صيانة ثلاجات سميج</strong>، نعمل على حل مشاكل الثلاجات مثل ضعف التبريد، تسريب المياه، أو التوقف المفاجئ. نحن نستخدم قطع غيار أصلية معتمدة لضمان عودة الثلاجة إلى أدائها الأمثل في أسرع وقت ممكن.</p>

      <h2 className='text-[#b8d759] text-2xl'>صيانة غسالات أطباق سميج :</h2>
      <p className='text-white text-center mx-auto border-b-2 border-emerald-400 mb-3 font-extralight'>نحن نقدم أيضًا خدمات متميزة في <strong>صيانة غسالات أطباق سميج</strong>. إذا كنت تواجه مشاكل مثل عدم التنظيف الجيد، تسريب المياه، أو أعطال تقنية أخرى، فريقنا المتخصص جاهز لتشخيص الأعطال وإصلاحها بسرعة لضمان تشغيل الغسالة بكفاءة عالية.</p>

      <h2 className='text-[#b8d759] text-2xl'>الخط الساخن سميج 16062 :</h2>
      <p className='text-white text-center mx-auto border-b-2 border-emerald-400 mb-3 font-extralight'>للتواصل معنا بسهولة، نقدم خدمة <strong>الخط الساخن 16062</strong>، الذي يتيح للعملاء إمكانية الاتصال بنا على مدار الساعة لحجز موعد أو لطلب الدعم الفني. فريق خدمة العملاء لدينا مدرب على التعامل مع جميع الاستفسارات بسرعة وكفاءة، مما يضمن تقديم المساعدة الفورية وحل المشكلات بأسرع وقت ممكن.</p>

      <small className='text-center justify-center items-center flex mx-auto  mb-3 font-extralight '>اعتمادك على <strong>توكيل صيانة سميج</strong> يعني ضمان الحصول على خدمة محترفة، باستخدام قطع غيار أصلية معتمدة، مع دعم فني متميز عبر <strong>الخط الساخن 16062</strong>. نحن هنا لخدمتك وضمان عودة أجهزتك المنزلية إلى أفضل حالاتها.</small>


    </div>


    <div className=" mt-10 ">

      <div className="flex flex-col mb-0 lg:flex-row justify-center items-center hover:bg-white group hover:-translate-y-5 transition-all ">
        <div className="w-full lg:w-[50%]">
          <div className="p-5 pr-0 lg:p-10">
            <Image src={stove2} className="w-[100%] rounded-lg" alt="صيانة بوتاجاز سميج" />
          </div>
        </div>

        <div className="w-full lg:w-[50%] pl-5 pr-5 py-5 text-white group-hover:text-black">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-3 text-[#CAA300]">مركز صيانة بوتاجاز سميج</h1>
            <p className="text-center mx-auto border-b-2 border-emerald-400 mb-3 font-extralight">
              يعتبر <strong>مركز صيانة بوتاجاز سميج</strong> واحداً من المراكز الرائدة والمتخصصة في تقديم خدمات الصيانة المتكاملة لأجهزة بوتاجاز سميج. يتميز مركزنا بخبرة طويلة تمتد لسنوات في مجال صيانة الأجهزة الكهربائية، مما يجعلنا الخيار الأمثل لكل من يبحث عن خدمة مميزة وسريعة. تعتمد خدماتنا على مجموعة من الفنيين المهرة والمدربين على أحدث التقنيات في صيانة وإصلاح بوتاجازات سميج، مما يضمن لعملائنا أداءً متميزاً وعمرًا أطول لأجهزتهم.
            </p>
            <p className="text-center mx-auto border-b-2 border-emerald-400 mb-3 font-extralight">
              نحن نؤمن بأهمية الصيانة الدورية والمستمرة للحفاظ على كفاءة البوتاجاز، ولذلك نحرص في <strong>مركز صيانة بوتاجاز سميج</strong> على تقديم خدمات فحص وصيانة شاملة تهدف إلى الكشف عن أي مشكلات قبل أن تتحول إلى أعطال كبيرة. يتميز مركزنا باستخدام قطع الغيار الأصلية والمعتمدة لضمان الجودة والأمان لعملائنا. كما نوفر لعملائنا تجربة خدمة ما بعد البيع من خلال توفير دعم فني مستمر والرد على استفساراتهم بشكل سريع وفعال.
            </p>
            <p className="text-center mx-auto mb-3 font-extralight">
              نحن في <strong>مركز صيانة بوتاجاز سميج</strong> نولي اهتماماً خاصاً لراحة عملائنا وسرعة استجابتنا لطلباتهم، حيث نوفر خدمة الخط الساخن التي تعمل على مدار الساعة لتلقي المكالمات والشكاوى. نسعى دائماً لضمان رضا العملاء من خلال تقديم حلول فورية وفعالة، مع الالتزام بأعلى معايير الجودة في الصيانة.
            </p>

          </div>
        </div>
      </div>


      <div className=" pb-5 bg-[#4E6C92]  hover:bg-[#936A28] transition-all group">
        <Image src={stove4} className="w-[100%]" alt="مركز صيانة ثلاجة سميج" />
        <div className="w-[70%] text-center mx-auto mt-5">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-3 text-[#CF6718] group-hover:text-[black] transition-all ">مركز صيانة ثلاجات سميج</h1>
          <p className="border-b-2 border-emerald-400 text-center text-white text-xl font-extralight line-clamp-6 ">
            يعد <strong>مركز صيانة ثلاجات سميج</strong> من أبرز المراكز المتخصصة في تقديم خدمات الصيانة المتكاملة لثلاجات سميج. بفضل سنوات الخبرة الطويلة التي نتمتع بها، تمكننا من أن نصبح الوجهة الأولى لكل من يبحث عن خدمة صيانة موثوقة وسريعة. يتميز مركزنا بوجود فريق من الفنيين المتخصصين الذين تم تدريبهم على أعلى مستوى للتعامل مع أحدث التقنيات في ثلاجات سميج، ما يضمن تقديم حلول فعالة وسريعة لجميع المشكلات التي قد تواجه عملائنا.
          </p>

          <p className="border-b-2 border-emerald-400 text-center text-white text-xl font-extralight line-clamp-6 ">
            نحرص في <strong>مركز صيانة ثلاجة سميج</strong> على تقديم خدمة متميزة تعتمد على الصيانة الدورية للحفاظ على كفاءة الأجهزة وضمان استمرار أدائها المثالي لفترات طويلة. نحن نستخدم قطع الغيار الأصلية المعتمدة فقط، وذلك لضمان أن تظل الثلاجة تعمل بكفاءة عالية وتجنب حدوث أي أعطال مستقبلية.
          </p>

          <p className="text-center text-white text-xl font-extralight line-clamp-6 ">
            <strong>مركز صيانة ثلاجات سميج</strong> يقدم دعماً فنياً على مدار الساعة عبر فريق دعم محترف مستعد لتلقي استفسارات العملاء والتعامل مع الأعطال في أسرع وقت ممكن. نحن نولي اهتمامًا خاصًا بسرعة الاستجابة، لأن راحتكم وثقتكم في خدماتنا من أولوياتنا.
          </p>


        </div>

      </div>

      <Callslider></Callslider>

      <div className="bg-black  transition-all flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-[30%] px-3">
          <div className="text-center mx-auto mt-5 text-white">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-3 text-[#6B1D28]">صيانة فرن سميج</h1>
            <p className="text-xl font-extralight border-b-2 border-emerald-400 py-2">
              يعد <strong>مركز صيانة فرن سميج</strong> من بين المراكز الرائدة في تقديم خدمات الصيانة المتخصصة لأفران سميج. نتمتع بخبرة واسعة تمتد لسنوات عديدة في هذا المجال، مما يجعلنا الخيار الأفضل لكل من يبحث عن خدمة صيانة احترافية وسريعة. يتميز مركزنا بوجود فريق من الفنيين المدربين على أحدث التقنيات المستخدمة في أفران سميج، مما يضمن تشخيص المشاكل بدقة وإجراء الإصلاحات المطلوبة بفاعلية وسرعة.
            </p>
            <p className="text-xl font-extralight border-b-2 border-emerald-400 py-2">
              في <strong>مركز صيانة فرن سميج</strong>، نحن ملتزمون بتقديم خدمات صيانة عالية الجودة تحافظ على أداء الفرن وكفاءته. نحرص على تقديم الصيانة الدورية التي تساعد على اكتشاف الأعطال قبل تفاقمها، مما يطيل من عمر الجهاز ويضمن استخدامًا آمنًا وفعالًا على مدار السنوات. نحن نستخدم قطع الغيار الأصلية والمعتمدة فقط لضمان تقديم أفضل خدمة ممكنة والحفاظ على جودة الفرن.
            </p>
            <p className="text-xl font-extralight border-b-2 border-emerald-400 py-2">
              إذا كنت بحاجة إلى صيانة أو إصلاح <strong>فرن سميج</strong>، فإننا في <strong>مركز صيانة فرن سميج</strong> نوفر لك الحل الأمثل. نقدم خدمات متكاملة تحافظ على جهازك في أفضل حالة وتشمل فحص شامل واستخدام قطع الغيار الأصلية.
            </p>
            <p className="text-xl font-extralight pt-2">
              نتمتع بخبرة واسعة تمتد لسنوات عديدة في هذا المجال، مما يجعلنا الخيار الأفضل لكل من يبحث عن خدمة صيانة احترافية وسريعة. يتميز مركزنا بوجود فريق من الفنيين المدربين على أحدث التقنيات المستخدمة في أفران سميج.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[70%] px-3 mt-5 lg:mt-0">
          <div>
            <Image src={smage5} className="w-full h-auto" alt="مركز صيانة فرن سميج" />
          </div>
        </div>
      </div>







      <div className=" bg-white  hover:bg-[#] transition-all flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-[70%] px-3 mt-5 lg:mt-0">
          <div>
            <Image src={smage6} className="w-full h-96" alt="مركز صيانة فرن سميج" />
          </div>
        </div>
        <div className="w-full lg:w-[30%] px-3">
          <div className="text-center mx-auto mt-5 text-black">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-3 text-[#298D05]">مركز صيانة غسالات سميج</h1>
            <p className="border-emerald-400 py-2 border-b-2 text-xl font-extralight">يعتبر <strong>مركز صيانة غسالات سميج</strong> واحدًا من المراكز الرائدة في مجال صيانة الأجهزة المنزلية، حيث نقدم خدمات صيانة وتصليح شاملة لغسالات سميج بمختلف أنواعها وموديلاتها. يتميز المركز بخبرة طويلة في التعامل مع جميع الأعطال والمشكلات التقنية التي قد تواجه الغسالات، مما يضمن حصول العملاء على حلول سريعة وفعالة. يعتمد فريقنا على أحدث التقنيات والمعدات، مما يجعلنا قادرين على تلبية جميع احتياجات صيانة غسالة سميج.</p>
            <p className="border-emerald-400 py-2 border-b-2 text-xl font-extralight">لدينا فريق فنيين متخصص ومدرب على أعلى مستوى، وهم على دراية تامة بكل ما يتعلق بصيانة غسالات سميج. يلتزم الفريق بتقديم أفضل الخدمات، بدءًا من التشخيص الدقيق للأعطال وصولاً إلى الإصلاح الشامل باستخدام قطع الغيار الأصلية المعتمدة من الشركة المصنعة. .</p>


          </div>
        </div>

      </div>
      <div className="text-black bg-white px-5">

        <p className="border-emerald-400 py-2 border-b-2 text-xl font-extralight">يحرص <strong>مركز صيانة سميج</strong> على تقديم خدماته بأعلى مستويات الجودة لضمان رضا العملاء التام. سواء كنت تواجه مشكلة في الغسالة مثل عدم التصريف، أو توقفها عن العمل فجأة، أو أي مشكلة أخرى، يمكنك الاعتماد علينا لإصلاحها بسرعة وبشكل احترافي. كما نوفر خدمة دعم فني متكاملة للإجابة على استفساراتك وتقديم المشورة حول أفضل الممارسات للحفاظ على غسالة سميج في حالة ممتازة.</p>

        <p className="border-emerald-400 py-2 border-b-2 text-xl font-extralight">إن خدمة العملاء لدينا هي جزء لا يتجزأ من نجاحنا، حيث نقدم دعمًا شاملاً عبر <strong>الخط الساخن 16062</strong> المتاح لتلقي اتصالات العملاء على مدار الساعة. سواء كان لديك استفسار أو شكوى، فإن فريق خدمة العملاء مدرب على الاستماع بعناية وتقديم الحلول المناسبة بسرعة وكفاءة. إن تواصلنا الدائم مع العملاء هو ما يميزنا ويعزز الثقة التي بنيناها على مر السنوات.</p>

        <p className="border-emerald-400 py-2 border-b-2 text-xl font-extralight">بالإضافة إلى ذلك، نحرص على تقديم خدمات الصيانة بأسعار تنافسية، مع توفير ضمان على جميع الإصلاحات التي نجريها. نهدف إلى تقديم حلول طويلة الأمد للمشاكل التي قد تواجه غسالات سميج، مما يتيح للعملاء الاستمتاع بتجربة استخدام سلسة وخالية من المتاعب. نحن نفخر بكوننا مركزًا معتمدًا من قبل شركة سميج، ونعمل دائمًا على تلبية احتياجات العملاء بأعلى مستوى من الجودة والاحترافية.</p>

        <p className="text-xl font-extralight">عند اختيارك <strong>مركز صيانة غسالة سميج</strong>، فإنك تضمن الحصول على خدمة موثوقة ودقيقة. تواصل معنا عبر <strong>الخط الساخن 16062</strong> للحصول على الدعم الفني أو حجز موعد للصيانة، وسنكون على استعداد لحل مشكلتك في أسرع وقت ممكن.</p>

      </div>
    </div>





    <div>
      <div>
        <Image src={smage12} className="w-full " alt="مركز صيانة فرن سميج" />
      </div>
      <div className="text-white px-10 text-center mt-3">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-3 text-[#0758A3] "> صيانة غسالات أطباق سميج</h1>

        <p className="text-center border-emerald-400 py-2 border-b-2">يعتبر <strong>مركز صيانة غسالات أطباق سميج</strong> واحدًا من أبرز المراكز المتخصصة في تقديم خدمات الصيانة والتصليح لجميع موديلات غسالات الأطباق سميج. نحن نقدم حلولًا متكاملة لصيانة غسالة الأطباق الخاصة بك لضمان استمرارية عملها بكفاءة عالية وتجنب أي مشكلات تقنية قد تواجهها.</p>


        <p className="text-center border-emerald-400 py-2 border-b-2">نحن نعتمد فقط على قطع غيار أصلية معتمدة من الشركة المصنعة، لضمان أفضل أداء وطول عمر لجهاز غسالة الأطباق. استخدام قطع الغيار الأصلية ليس فقط يضمن إصلاح العطل بكفاءة، بل يساعد أيضًا في الحفاظ على الجهاز لأطول فترة ممكنة دون الحاجة لإصلاحات متكررة.</p>

        <p className="text-center border-emerald-400 py-2 border-b-2">كما نقدم في <strong>مركز صيانة سميج</strong> خدمات دعم فني متميزة وسريعة، حيث يمكن للعملاء التواصل معنا عبر <strong>الخط الساخن سميج 16062</strong> لحجز موعد أو استفسار عن أي مشكلة تواجههم مع غسالة الأطباق. نحن نلتزم بتقديم حلول سريعة ومضمونة لتلبية احتياجات العملاء في الوقت المناسب.</p>

        <p className="text-center border-emerald-400 py-2 border-b-2">خدمتنا تشمل أيضًا تقديم نصائح وإرشادات للعملاء حول كيفية الحفاظ على أداء غسالة الأطباق سميج وتجنب الأعطال المتكررة. نحن نؤمن بأهمية الوقاية والصيانة الدورية لضمان استمرارية الجهاز في العمل بكفاءة عالية.</p>

        <p className="text-center ">إذا كنت تبحث عن <strong>مركز صيانة معتمد لغسالات أطباق سميج</strong>، يمكنك الاعتماد علينا لتقديم خدمة محترفة وموثوقة. اتصل بنا الآن عبر <strong>الخط الساخن سميج 16062</strong> لتحصل على الدعم الفني أو لتحديد موعد للصيانة. نحن هنا لنقدم لك أفضل الحلول التي تضمن لك راحة البال وتجعل غسالة الأطباق الخاصة بك تعمل بكفاءة مرة أخرى.</p>

      </div>
    </div> </>)}





  </div>

    




  </>;
}
