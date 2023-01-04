import React from "react";
import Script from "next/script";
import Link from "next/link";

const Courses = () => {
  return (
    <div >

        <div className="container my-8 px-6 md:px-16 mx-auto bg-amber-200">
                <div className="flex flex-grow justify-between">
                <span>
                    <h2 className="text-4xl md:pl-8 mb-8 font-cursive text-orange-500">
                    Сургалтууд
                    </h2>
                </span>
                <span>
                    <h2 className="text-md text-light mt-6 font-cursive text-blue-500 underline">
                    <Link href="/categories"> Бүх сургалт </Link>
                    </h2>
                </span>
                </div>
      
                <div id="carouselExampleCaptions" className="carousel slide relative carousel-dark" data-bs-ride="carousel" >
                    <div className="container flex items-center mx-auto ">

               


        <button className="text-[#f97316] hover:border border-[#f97316] rounded-full px-2 hover:shadow-lg shadow-gray-200 hidden md:block w-11 h-10" id="prev-btn" type="button" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
          </svg>
        </button>



        <div className="container mx-auto mb-16">
           <div className="flex flex-col items-stretch justify-start space-y-6 md:flex-row md:overflow-hidden md:flex-no-wrap md:space-y-0 h-80 ">
                    <div className="flex flex-shrink-0 w-72">
                        <a href="#" className="relative group block mx-2">
                            <div className="absolute inset-0 bg-black opacity-75 p-4 hidden group-hover:flex flex-col justify-end text-white cursor-pointer">
                                <h3 className="text-lg mb-2"> Tenet </h3>
                                <p className="leading-normal select-none"> Сургалтын дэлгэрэнгүй тайлбар тэмдэглэл, хичээлийн агуулга, багшийн товч танилцуулга энд бичигдэнэ.</p>
                            </div>
                            <img src="/assets/img/courses/course1.jpg" alt="course1"/>

                        </a>
                    </div>


                    <div className="flex flex-shrink-0 w-72">
                        <a href="#" className="relative group block mx-2">
                            <div className="absolute inset-0 bg-black opacity-75 p-4 hidden group-hover:flex flex-col justify-end text-white cursor-pointer">
                                <h3 className="text-lg mb-2"> Tenet </h3>
                                <p className="leading-normal select-none"> Сургалтын дэлгэрэнгүй тайлбар тэмдэглэл, хичээлийн агуулга, багшийн товч танилцуулга энд бичигдэнэ.</p>
                            </div>
                            <img src="/assets/img/courses/course2.jpg" alt="course2"/>

                        </a>
                    </div>

                    <div className="flex flex-shrink-0 w-72">
                        <a href="#" className="relative group block mx-2">
                            <div className="absolute inset-0 bg-black opacity-75 p-4 hidden group-hover:flex flex-col justify-end text-white cursor-pointer">
                                <h3 className="text-lg mb-2"> Tenet </h3>
                                <p className="leading-normal select-none"> Сургалтын дэлгэрэнгүй тайлбар тэмдэглэл, хичээлийн агуулга, багшийн товч танилцуулга энд бичигдэнэ.</p>
                            </div>
                            <img src="/assets/img/courses/course3.jpg" alt="course3"/>

                        </a>
                    </div>

                    <div className="flex flex-shrink-0 w-72">
                        <a href="#" className="relative group block mx-2">
                            <div className="absolute inset-0 bg-black opacity-75 p-4 hidden group-hover:flex flex-col justify-end text-white cursor-pointer">
                                <h3 className="text-lg mb-2"> Tenet </h3>
                                <p className="leading-normal select-none"> Сургалтын дэлгэрэнгүй тайлбар тэмдэглэл, хичээлийн агуулга, багшийн товч танилцуулга энд бичигдэнэ.</p>
                            </div>
                            <img src="/assets/img/courses/course4.jpg" alt="course4"/>

                        </a>
                    </div>

                    <div className="flex flex-shrink-0 w-72">
                        <a href="#" className="relative group block mx-2">
                            <div className="absolute inset-0 bg-black opacity-75 p-4 hidden group-hover:flex flex-col justify-end text-white cursor-pointer">
                                <h3 className="text-lg mb-2"> Tenet </h3>
                                <p className="leading-normal select-none"> Сургалтын дэлгэрэнгүй тайлбар тэмдэглэл, хичээлийн агуулга, багшийн товч танилцуулга энд бичигдэнэ.</p>
                            </div>
                            <img src="/assets/img/courses/course5.jpg" alt="course5"/>

                        </a>
                    </div>

                    <div className="flex flex-shrink-0 w-72">
                        <a href="#" className="relative group block mx-2">
                            <div className="absolute inset-0 bg-black opacity-75 p-4 hidden group-hover:flex flex-col justify-end text-white cursor-pointer">
                                <h3 className="text-lg mb-2"> Tenet </h3>
                                <p className="leading-normal select-none"> Сургалтын дэлгэрэнгүй тайлбар тэмдэглэл, хичээлийн агуулга, багшийн товч танилцуулга энд бичигдэнэ.</p>
                            </div>
                            <img src="/assets/img/courses/course6.jpg" alt="course6"/>

                        </a>
                    </div>

                    <div className="flex flex-shrink-0 w-72">
                        <a href="#" className="relative group block mx-2">
                            <div className="absolute inset-0 bg-black opacity-75 p-4 hidden group-hover:flex flex-col justify-end text-white cursor-pointer">
                                <h3 className="text-lg mb-2"> Tenet </h3>
                                <p className="leading-normal select-none"> Сургалтын дэлгэрэнгүй тайлбар тэмдэглэл, хичээлийн агуулга, багшийн товч танилцуулга энд бичигдэнэ.</p>
                            </div>
                            <img src="/assets/img/courses/course7.jpg" alt="course7"/>

                        </a>
                    </div>

                    <div className="flex flex-shrink-0 w-72">
                        <a href="#" className="relative group block mx-2">
                            <div className="absolute inset-0 bg-black opacity-75 p-4 hidden group-hover:flex flex-col justify-end text-white cursor-pointer">
                                <h3 className="text-lg mb-2"> Tenet </h3>
                                <p className="leading-normal select-none"> Сургалтын дэлгэрэнгүй тайлбар тэмдэглэл, хичээлийн агуулга, багшийн товч танилцуулга энд бичигдэнэ.</p>
                            </div>
                            <img src="/assets/img/courses/course8.jpg" alt="course8"/>

                        </a>
                    </div>
                  
            </div>


            
        </div>




        <button className="text-[#f97316] hover:border border-[#f97316] rounded-full px-2 hover:shadow-lg shadow-gray-200 hidden md:block w-11 h-10" id="next-btn" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            < path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
        </button>

      </div>


      </div>

        </div>

    
    </div>
  );
};

export default Courses;
