import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';


// import {faUmbrella, faShieldHeart, faPersonDrowning, faPeopleGroup, faRocket, faPeopleRobbery} from "@fortawesome/free-solid-svg-icons";


const Featuredcourses = () => {
  return (
    <div>
      <div className="container p-4 mx-auto">
        <section>
          <div className="flex flex-grow justify-between">
            <span>
              <h2 className="text-3xl md:pl-8 font-cursive text-orange-500">               
                Онцлох сургалтууд
              </h2>
            </span>
            <span> <h2 className="text-md text-light mt-6 font-cursive text-blue-500 underline">
                      <Link href="/lessons"> Бүх хичээл </Link> </h2>
            </span>         
          </div>

          
            <div className="flex flex-grow md:max-w-7xl gap-3 md:justify-between w-full mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mt-6">
              <div className="relative lg:mb-0 hover:shadow-[1px_1px_8px_2px_rgba(249,115,22,0.4)] rounded-xl shadow-gray-200 border border-[#f97316]/40">
                <div className="mb-12 lg:mb-0">
                  <a href="/lesson/54">                    
                    <img
                      className="rounded-lg shadow-lg mb-6 mx-auto"
                      src="/assets/img/courses/course6.jpg"
                      alt="avatar"
                      style={{ width: "full" }}
                    />
                  </a>

                  <div className="mb-12 lg:mb-0">
                    <a href="/teacher/17">
                      <img
                        className="rounded-2xl shadow-lg mb-1 mx-auto -mt-16"
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                        alt="avatar"
                        style={{ width: 70 }}
                      />
                    </a>
                    <a href="/teacher">
                      <h5 className="text-sm text-center font-normal font-serif mb-0 text-[#f97316]">
                        Н.Мөнхбаяр
                      </h5>
                    </a>
                    <a href="/lesson">
                      <p className="mb-2 text-blue-500 hover:text-teal-500 uppercase text-center max-w-[80%] mx-auto">
                        NextJS вэб хөгжүүлэлтийн технологи
                      </p>
                    </a>
                    <hr class="border-b border border-[#f97316] w-24 mt-0 mb-4 mx-auto" />

                    <div className="flex justify-between text-blue-500 text-sm">
                      <div className="ml-6 pt-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                      </div>
                      <div className="-ml-2 mt-0 pr-4 text-gray-500">
                        <p>51 видео хичээл</p>
                      </div>

                      <div className="mr-5 mt-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="-ml-6 mt-0 pr-6 text-gray-500">
                          315 харсан
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between text-blue-500 text-sm mb-8 pt-3">
                      <div className="ml-6 pt-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>

                      <div className="-ml-3 mt-0 pr-4 text-gray-500">
                        <p>7 цаг 24 мин</p>
                      </div>

                      <div className="ml-2 mt-0 -pr-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="-ml-2 mt-0 pr-6 text-gray-500">
                          31 суралцагч
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative lg:mb-0 hover:shadow-[1px_1px_8px_2px_rgba(249,115,22,0.4)] rounded-xl shadow-gray-200 border border-[#f97316]/40 max-w-xs">
                <div className="mb-12 lg:mb-0">
                  <a href="/lesson/54">
                    <img
                      className="rounded-lg shadow-lg mb-6 mx-auto"
                      src="/assets/img/courses/course6.jpg"
                      alt="avatar"
                      style={{ width: "full" }}
                    />
                  </a>

                  <div className="mb-12 lg:mb-0">
                    <a href="/teacher/17">                      
                      <img
                        className="rounded-2xl shadow-lg mb-1 mx-auto -mt-16"
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                        alt="avatar"
                        style={{ width: 70 }}
                      />
                    </a>
                    <a href="/teacher">                      
                      <h5 className="text-sm text-center font-normal font-serif mb-0 text-[#f97316]">
                        Н.Мөнхбаяр
                      </h5>
                    </a>
                    <a href="/lesson">                      
                      <p className="mb-2 text-blue-500 hover:text-teal-500 uppercase text-center max-w-[80%] mx-auto">
                        NextJS вэб хөгжүүлэлтийн технологи
                      </p>
                    </a>
                    <hr class="border-b border border-[#f97316] w-24 mt-0 mb-4 mx-auto" />

                    <div className="flex justify-around text-blue-500 text-sm">
                      <div className="ml-6 pt-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                      </div>
                      <div className="-ml-2 mt-0 pr-4 text-gray-500">
                        <p>51 видео хичээл</p>
                      </div>

                      <div className="mr-5 mt-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="-ml-6 mt-0 pr-6 text-gray-500">
                          315 харсан
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between text-blue-500 text-sm mb-8 pt-3">
                      <div className="ml-6 pt-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>

                      <div className="-ml-3 mt-0 pr-4 text-gray-500">
                        <p>7 цаг 24 мин</p>
                      </div>

                      <div className="ml-2 mt-0 -pr-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="-ml-2 mt-0 pr-6 text-gray-500">
                          31 суралцагч
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative lg:mb-0 hover:shadow-[1px_1px_8px_2px_rgba(249,115,22,0.4)] rounded-xl shadow-gray-200 border border-[#f97316]/40 max-w-xs">
                <div className="mb-12 lg:mb-0">
                  <a href="/lesson/54">
                    <img
                      className="rounded-lg shadow-lg mb-6 mx-auto"
                      src="/assets/img/courses/course7.jpg"
                      alt="avatar"
                      style={{ width: "full" }}
                    />
                  </a>

                  <div className="mb-12 lg:mb-0">
                    <a href="/teacher/15">
                      <img
                        className="rounded-2xl shadow-lg mb-1 mx-auto -mt-16"
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                        alt="avatar"
                        style={{ width: 70 }}
                      />
                    </a>
                    <a href="/teacher">                      
                      <h5 className="text-sm text-center font-normal font-serif mb-0 text-[#f97316]">
                        Н.Мөнхзул
                      </h5>
                    </a>
                    <a href="/lesson">                     
                      <p className="mb-2 text-blue-500 hover:text-teal-500 uppercase text-center max-w-[80%] mx-auto">
                        Бага ангийн сурагчдын сонгон суралцах математик
                      </p>
                    </a>
                    <hr class="border-b border border-[#f97316]/100 w-24 mt-0 mb-4 mx-auto" />

                    <div className="flex justify-between text-blue-500 text-sm">
                      <div className="ml-6 pt-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                      </div>
                      <div className="-ml-2 mt-0 pr-4 text-gray-500">
                        <p>33 видео хичээл</p>
                      </div>

                      <div className="mr-5 mt-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="-ml-6 mt-0 pr-6 text-gray-500">
                          802 харсан
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between text-blue-500 text-sm mb-8 pt-3">
                      <div className="ml-6 pt-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>

                      <div className="-ml-3 mt-0 pr-4 text-gray-500">
                        <p>4 цаг 51 мин</p>
                      </div>

                      <div className="ml-2 mt-0 -pr-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="-ml-2 mt-0 pr-6 text-gray-500">
                          128 суралцагч
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative lg:mb-0 hover:shadow-[1px_1px_8px_2px_rgba(249,115,22,0.4)] rounded-xl shadow-gray-200 border border-[#f97316]/40 max-w-xs">
                <div className="mb-12 lg:mb-0">
                  <a href="/lesson/54">
                    <img
                      className="rounded-lg shadow-lg mb-6 mx-auto"
                      src="/assets/img/courses/course7.jpg"
                      alt="avatar"
                      style={{ width: "full" }}
                    />
                  </a>

                  <div className="mb-12 lg:mb-0 ">
                    <a href="/teacher/15">
                      <img
                        className="rounded-2xl shadow-lg mb-1 mx-auto -mt-16"
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                        alt="avatar"
                        style={{ width: 70 }}
                      />
                    </a>
                    <a href="/teacher">
                      <h5 className="text-sm text-center font-normal font-serif mb-0 text-[#f97316]">
                        Н.Мөнхзул
                      </h5>
                    </a>
                    <a href="/lesson">
                      <p className="mb-2 text-blue-500 hover:text-teal-500 uppercase text-center max-w-[80%] mx-auto">
                        Бага ангийн сурагчдын сонгон суралцах математик
                      </p>
                    </a>
                    <hr class="border-b border border-[#f97316] w-24 mt-0 mb-4 mx-auto" />

                    <div className="flex justify-between text-blue-500 text-sm">
                      <div className="ml-6 pt-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                      </div>
                      <div className="-ml-2 mt-0 pr-4 text-gray-500">
                        <p>33 видео хичээл</p>
                      </div>

                      <div className="mr-5 mt-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="-ml-6 mt-0 pr-6 text-gray-500">
                          802 харсан
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between text-blue-500 text-sm mb-8 pt-3">
                      <div className="ml-6 pt-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>

                      <div className="-ml-3 mt-0 pr-4 text-gray-500">
                        <p>4 цаг 51 мин</p>
                      </div>

                      <div className="ml-2 mt-0 -pr-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="-ml-2 mt-0 pr-6 text-gray-500">
                          128 суралцагч
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </div>
    </div>
    
       
  )
}

export default Featuredcourses