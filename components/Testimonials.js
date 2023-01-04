import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div>
      <div className="container mx-auto bg-amber-50">
        <section className="">
          <div className="flex justify-around max-w-7xl mx-auto ">
            <div
              id="carouselExampleCaptions"
              className="carousel slide relative carousel-dark"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner relative w-full overflow-hidden font-cursive mt-16 ">
                <div className="carousel-item active relative float-left w-full text-center">
                  <p className="text-xl text-light mx-auto text-gray-700 max-w-4xl text-purple-500">
                    &quot;Үнэхээр сайхан өгөөжтэй сургалтад хамрагдсандаа
                    баяртай байна. Та бүхэндээ баярлалаа. Ажлын өндөр амжилт
                    хүсэн ерөөе.&ldquo;
                  </p>
                  <div className="mt-12 mb-6 flex justify-center">
                    <Image
                      src="/assets/img/avatars/oyunbat.png"
                      className="rounded-full w-24 h-24 shadow-lg"
                      alt="smaple image"
                      width={72}
                      height={72}
                    />
                  </div>
                  <p className="text-gray-500 mb-8">С.Оюунбат</p>
                </div>
                <div className="carousel-item relative float-left w-full text-center">
                  <p className="text-xl text-light mx-auto text-gray-700 max-w-4xl text-purple-500">
                    &quot;Neque cupiditate assumenda in maiores repudiandae
                    mollitia adipisci maiores repudiandae mollitia consectetur
                    adipisicing architecto elit sed adipiscing elit.&ldquo;
                  </p>
                  <div className="mt-12 mb-6 flex justify-center">
                    <Image
                      src="/assets/img/avatars/oyunbat.png"
                      className="rounded-full w-24 h-24 shadow-lg"
                      alt="smaple image"
                      width={72}
                      height={72}
                      
                    />
                  </div>
                  <p className="text-gray-500 mb-8">Н.Ганцэцэг</p>
                </div>
                <div className="carousel-item relative float-left w-full text-center">
                  <p className="text-xl text-light mx-auto text-gray-700 max-w-4xl text-purple-500">
                    &quot;Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur est
                    laborum neque cupiditate assumenda in maiores.&ldquo;
                  </p>
                  <div className="mt-12 mb-6 flex justify-center">
                    <Image
                      src="/assets/img/avatars/ariuntungalag.jpg"
                      className="rounded-full w-24 h-24 shadow-lg"
                      alt="smaple image"
                      width={72}
                      height={72}
                     
                    />
                  </div>
                  <p className="text-gray-500 mb-8">Н.Ариунтунгалаг</p>
                </div>
              </div>
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
                <span className="visually-hidden">Өмнөх</span>
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
                <span className="visually-hidden">Дараах</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
