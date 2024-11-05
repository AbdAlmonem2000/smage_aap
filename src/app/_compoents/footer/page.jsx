import React from 'react'
export default function Footer() {




    
    return <>
        <div className='p-3 relative'>
            <div className='rounded-xl shadow-2xl flex flex-col lg:flex-row justify-center items-center footerr p-5 lg:px-9 mt-6 border-x-2 border-y-2 border-white'>
                
                <div className='w-full lg:w-[60%] z-10'>
                    <h3 className="text-2xl text-center sm:text-3xl lg:text-2xl mb-3 text-white">الخط الساخن وأرقام صيانة سميج</h3>

                    <div className='flex flex-wrap justify-around items-center w-full'>
                        <div className='w-full cursor-pointer sm:w-[45%] lg:w-[20%] p-2'>
                            <div className='py-2 px-5 text-center bg-black text-white font-semibold rounded-xl shadow-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>
                                <a className='italic text-xl' href="tel:01033335873">01033335873<i className="fa-solid fa-phone mr-2 text-red-500"></i></a>
                            </div>
                        </div>
                        <div className='w-full cursor-pointer sm:w-[45%] lg:w-[20%] p-2'>
                            <div className='py-2 px-5 text-center bg-black text-white font-semibold rounded-xl shadow-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>
                                <a className='italic text-xl' href="tel:0237622400">0237622400<i className="fa-solid fa-phone mr-2 text-red-500"></i></a>
                            </div>
                        </div>
                        <div className='w-full cursor-pointer sm:w-[45%] lg:w-[20%] p-2'>
                            <div className='py-2 px-5 text-center bg-black text-white font-semibold rounded-xl shadow-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>
                                <a className='italic text-xl' href="tel:01033100167">01033100167<i className="fa-solid fa-phone mr-2 text-red-500"></i></a>
                            </div>
                        </div>
                        <div className='w-full cursor-pointer sm:w-[45%] lg:w-[20%] p-2'>
                            <div className='py-2 px-5 text-center bg-black text-white font-semibold rounded-xl shadow-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>
                                <a className='italic text-xl' href="tel:0237491500">0237491500<i className="fa-solid fa-phone mr-2 text-red-500"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-wrap justify-around items-center w-full'>
                        <div className='w-full cursor-pointer sm:w-[45%] lg:w-[20%] p-2'>
                            <div className='py-2 px-5 text-center bg-black text-white font-semibold rounded-xl shadow-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>
                                <a className='italic text-xl' href="tel:0237615300">0237615300<i className="fa-solid fa-phone mr-2 text-red-500"></i></a>
                            </div>
                        </div>
                        <div className='w-full cursor-pointer sm:w-[45%] lg:w-[20%] p-2'>
                            <div className='py-2 px-5 text-center bg-black text-white font-semibold rounded-xl shadow-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>
                                <a className='italic text-xl' href="tel:0237611666">0237611666<i className="fa-solid fa-phone mr-2 text-red-500"></i></a>
                            </div>
                        </div>
                        <div className='w-full cursor-pointer sm:w-[45%] lg:w-[20%] p-2'>
                            <div className='py-2 px-5 text-center bg-black text-white font-semibold rounded-xl shadow-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>
                                <a className='italic text-xl' href="tel:0237605444">0237605444<i className="fa-solid fa-phone mr-2 text-red-500"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-[40%] z-10'>
                    <h3 className="text-2xl text-center sm:text-3xl lg:text-4xl mb-3 text-red-400">الخط الساخن وأرقام مركز وتوكيل صيانة سميج</h3>

                    <p className='text-center mx-auto mb-3 font-extralight italic text-white'>يقدم <strong>توكيل صيانة سميج</strong> خدمات صيانة شاملة ومعتمدة لجميع أجهزة سميج، بما في ذلك غسالات الملابس، غسالات الأطباق، الأفران، والثلاجات. لضمان توفير تجربة سلسة وسريعة للعملاء، يوفر <strong>مركز صيانة سميج</strong> خدمة مميزة عبر <strong>الخط الساخن سميج 16062</strong>.</p>
                    <p className='text-center mx-auto mb-3 font-extralight italic text-white'>عند الاتصال عبر <strong>الخط الساخن سميج 16062</strong>، ستحصل على دعم كامل بدءًا من الاستفسار عن الأعطال البسيطة وصولًا إلى حجز موعد لصيانة شاملة.</p>
                </div>
            </div>

            <div className=" fixed bottom-10 right-5 rounded-xl z-10">
                <a
                    href="tel:16062"
                    className="py-6 px-6  sm:py-3 sm:px-8 bg-gradient-to-r from-black to-white text-white rounded-full shadow-lg hover:bg-black transition-all text-base sm:text-xl font-bold"
                >
                    <span className='ml-2 text-red-800 italic'>اتصل الان</span>  <i className="fa-solid fa-phone text-red-800 "></i>
                </a>

            </div>

            <div className='absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-75'></div>

        </div>


    </>
}
