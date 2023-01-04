import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';


import {faUmbrella, faShieldHeart, faPersonDrowning, faPeopleGroup, faRocket, faPeopleRobbery} from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  return (
    <div>      
          <div className="container my-8 px-6 md:px-16 mx-auto"> 
            <section className="text-gray-800 text-center">
              <div className="flex flex-grow justify-between">
                <span> <h2 className="text-4xl md:pl-8 mb-8 font-cursive text-orange-500"> Ангиллууд </h2> </span>   
                <span> <h2 className="text-md text-light mt-6 font-cursive text-blue-500 underline">
                      <Link href="/categories"> Бүх ангилал </Link> </h2>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-6 max-w-8xl">
                <Link href="/design">
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
                </Link> 

              </div>
            </section>
          </div>
          
    </div>
  )
}

export default Categories