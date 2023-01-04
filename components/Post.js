import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {faUmbrella, faShieldHeart, faPersonDrowning, faPeopleGroup, faRocket, faPeopleRobbery} from "@fortawesome/free-solid-svg-icons";

const Post = () => {
  return (
    <div>
      <div className="container my-8 px-6 md:px-16 mx-auto">
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

        <div
          id="carouselExampleCaptions"
          className="carousel slide relative carousel-dark"
          data-bs-ride="carousel"
        >
          <section className="text-gray-800 text-center">
            <div className="carousel-inner relative w-full overflow-hidden col-span-6">

              
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-6 max-w-8xl flex relative">


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



                {/* <div className="absolute w-72 h-96 bg-green-300">
                    <h2>jfldjglf</h2>
                    <p>kjfjgfkgjkfjgkkaghjfh</p>
                </div>

                <div className="absolute w-72 h-96 bg-green-300">
                    <h2>jfldjglf</h2>
                    <p>kjfjgfkgjkfjgkkaghjfh</p>
                </div>

                <div className="absolute w-72 h-96 bg-green-300">
                    <h2>jfldjglf</h2>
                    <p>kjfjgfkgjkfjgkkaghjfh</p>
                </div>


                <div className="absolute w-72 h-96 bg-green-300">
                    <h2>jfldjglf</h2>
                    <p>kjfjgfkgjkfjgkkaghjfh</p>
                </div>

                <div className="absolute w-72 h-96 bg-green-300">
                    <h2>jfldjglf</h2>
                    <p>kjfjgfkgjkfjgkkaghjfh</p>
                </div> */}
                {/* <Link href="/design">
                    <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(249,115,22,0.25)] rounded-xl shadow-gray-200 p-4 border border-[#f97316] md:py-12">      
                        <FontAwesomeIcon icon={faUmbrella} style={{ fontSize: 60, color: "#f97316" }} />             
                        <h5 className="text-xl font-light m-4">DESIGN</h5>
                        <p className="md:mb-6 text-md font-light"> <strong className="text-[#f97316] font-bold text-lg"> 400+ </strong> Видео хичээл</p>
                    </a>        
                </Link>

                <Link href="/lifestyle">
                  <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(111,148,252,0.25)] rounded-xl shadow-gray-200 p-4 border border-[#6f94fc] md:py-12">      
                      <FontAwesomeIcon icon={faShieldHeart} style={{ fontSize: 60, color: "#6f94fc" }} />            
                      <h5 className="text-xl font-light m-4">LIFE STYLE</h5>
                      <p className="md:mb-6 text-md font-light"> <strong className="text-[#6f94fc] font-bold text-lg"> 50+ </strong> Видео хичээл</p>
                  </a>      
                </Link>

                <Link href="/spinnig">
                  <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(197,161,255,0.25)] rounded-xl shadow-gray-200 p-4 border border-[#c5a1ff] md:py-12">      
                      <FontAwesomeIcon icon={faPeopleGroup} style={{ fontSize: 60, color: "#c5a1ff" }} />           
                      <h5 className="text-xl font-light m-4">SPINNIG</h5>
                      <p className="md:mb-6 text-md font-light"> <strong className="text-[#c5a1ff] font-bold text-lg"> 80+ </strong> Видео хичээл</p>
                  </a>     
                </Link>

                <Link href="/yoga">
                  <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(255,184,66,0.25)] rounded-xl shadow-gray-200 p-4 border border-[#ffb842] md:py-12">      
                      <FontAwesomeIcon icon={faPersonDrowning} style={{ fontSize: 60, color: "#ffb842" }} />            
                      <h5 className="text-xl font-light m-4">YOGA</h5>
                      <p className="md:mb-6 text-md font-light"> <strong className="text-[#ffb842] font-bold text-lg"> 600+ </strong> Видео хичээл</p>
                  </a>      
                </Link>

                <Link href="/marketing">
                  <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(117,215,114,0.25)] rounded-xl shadow-gray-200 p-4 border border-[#75d772] md:py-12">      
                      <FontAwesomeIcon icon={faRocket} style={{ fontSize: 60, color: "#75d772" }} />            
                      <h5 className="text-xl font-light m-4">MARKETING</h5>
                      <p className="md:mb-6 text-md font-light"> <strong className="text-[#75d772] font-bold text-lg"> 40+ </strong> Видео хичээл</p>
                  </a>        
                </Link>

                <Link href="/dance">
                  <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(250,113,131,0.25)] rounded-xl shadow-gray-200 p-4 border border-[#fa7183] md:py-12">      
                      <FontAwesomeIcon icon={faPeopleRobbery} style={{ fontSize: 60, color: "#fa7183" }} />            
                      <h5 className="text-xl font-light m-4">DANCE</h5>
                      <p className="md:mb-6 text-md font-light"> <strong className="text-[#fa7183] font-bold text-lg"> 100+ </strong> Видео хичээл</p>
                  </a>        
                </Link>  */}

              </div>
              {/*             
                                <div className="carousel-item active relative float-left w-full text-center">
                                    <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                                      numquam iure provident voluptate esse quasi, voluptas nostrum quisquam!"
                                    </p>

                                    <div className="mt-12 mb-6 flex justify-center">
                                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" className="rounded-full w-24 h-24 shadow-lg" alt="smaple image" />
                                    </div>
                                    <p className="text-gray-500">- Anna Morian</p>
                                </div>

                                <div className="carousel-item relative float-left w-full text-center">
                                  <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                                    "Neque cupiditate assumenda in maiores repudiandae mollitia adipisci maiores
                                    repudiandae mollitia consectetur adipisicing architecto elit sed adipiscing
                                    elit."
                                  </p>
                                  <div className="mt-12 mb-6 flex justify-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp" className="rounded-full w-24 h-24 shadow-lg" alt="smaple image" />
                                  </div>
                                  <p className="text-gray-500">- Teresa May</p>
                                </div>

                                <div className="carousel-item relative float-left w-full text-center">
                                  <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                                    "Neque cupiditate assumenda in maiores repudiandae mollitia adipisci maiores
                                    repudiandae mollitia consectetur adipisicing architecto elit sed adipiscing
                                    elit."
                                  </p>
                                  <div className="mt-12 mb-6 flex justify-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp" className="rounded-full w-24 h-24 shadow-lg" alt="smaple image" />
                                  </div>
                                  <p className="text-gray-500">- Teresa May2</p>
                                </div>


                                <div className="carousel-item relative float-left w-full text-center">
                                  <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                                    "Neque cupiditate assumenda in maiores repudiandae mollitia adipisci maiores
                                    repudiandae mollitia consectetur adipisicing architecto elit sed adipiscing
                                    elit."
                                  </p>
                                  <div className="mt-12 mb-6 flex justify-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp" className="rounded-full w-24 h-24 shadow-lg" alt="smaple image" />
                                  </div>
                                  <p className="text-gray-500">- Teresa May3</p>
                                </div>


                                <div className="carousel-item relative float-left w-full text-center">
                                  <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur est laborum neque cupiditate assumenda in
                                    maiores."
                                  </p>
                                  <div className="mt-12 mb-6 flex justify-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" className="rounded-full w-24 h-24 shadow-lg" alt="smaple image" />
                                  </div>
                                  <p className="text-gray-500">- Kate Allise</p>
                                </div>

                                
                                <div className="carousel-item relative float-left w-full text-center">
                                  <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur est laborum neque cupiditate assumenda in
                                    maiores."
                                  </p>
                                  <div className="mt-12 mb-6 flex justify-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" className="rounded-full w-24 h-24 shadow-lg" alt="smaple image" />
                                  </div>
                                  <p className="text-gray-500">- Kate Allise2</p>
                                </div>

                                
                                <div className="carousel-item relative float-left w-full text-center">
                                  <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur est laborum neque cupiditate assumenda in
                                    maiores."
                                  </p>
                                  <div className="mt-12 mb-6 flex justify-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" className="rounded-full w-24 h-24 shadow-lg" alt="smaple image" />
                                  </div>
                                  <p className="text-gray-500">- Kate Allise3</p>
                                </div>

                                
                                <div className="carousel-item relative float-left w-full text-center">
                                  <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur est laborum neque cupiditate assumenda in
                                    maiores."
                                  </p>
                                  <div className="mt-12 mb-6 flex justify-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" className="rounded-full w-24 h-24 shadow-lg" alt="smaple image" />
                                  </div>
                                  <p className="text-gray-500">- Kate Allise4</p>
                                </div> */}
            </div>
          </section>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
