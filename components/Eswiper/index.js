import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Link from "next/link";

//Card
import Card from "./Card";

//data
const data=[
    {"teacher":"Н.Ариунтунгалаг","courseImg":"/assets/img/courses/course1.jpg","teacherImg":"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg","courseName":"Манифест & аффирмэйшн хэрхэн зөв хийх вэ?","allVideos":3,"view":315,"duration":422,"students":31},
    {"teacher":"М.Сэржмядаг","courseImg":"/assets/img/courses/course2.jpg","teacherImg":"https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg","courseName":"Манифест & аффирмэйшн хэрхэн зөв хийх вэ?","allVideos":5,"view":315,"duration":82,"students":11},
    {"teacher":"Ж.Ариунсарнай","courseImg":"/assets/img/courses/course3.jpg","teacherImg":"https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg","courseName":"Дотоод бясалгалын хүч, түүний нөлөө","allVideos":51,"view":315,"duration":33,"students":51},
    {"teacher":"Н.Болормаа","courseImg":"/assets/img/courses/course4.jpg","teacherImg":"https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg","courseName":"Дотоод хүүхдийн анагаалт засал","allVideos":51,"view":315,"duration":422,"students":45},
    {"teacher":"Н.Анарзаяа","courseImg":"/assets/img/courses/course5.jpg","teacherImg":"https://mdbootstrap.com/img/Photos/Avatars/img%20(5).jpg","courseName":"Хүслийн самбараа хамтдаа бүтээцгээе","allVideos":51,"view":315,"duration":72,"students":64},
    {"teacher":"Н.Буяннэмэх","courseImg":"/assets/img/courses/course6.jpg","teacherImg":"https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg","courseName":"MERN","allVideos":51,"view":315,"duration":422,"students":75},
    {"teacher":"Н.Буяннэмэх","courseImg":"/assets/img/courses/course7.jpg","teacherImg":"https://mdbootstrap.com/img/Photos/Avatars/img%20(7).jpg","courseName":"NextJS вэб хөгжүүлэлтийн технологи","allVideos":51,"view":315,"duration":522,"students":88},
    {"teacher":"Н.Хулан","courseImg":"/assets/img/courses/course8.jpg","teacherImg":"https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg","courseName":"NextJS вэб хөгжүүлэлтийн технологи","allVideos":51,"view":315,"duration":42,"students":100}

];

const Eswiper = () => {
  return (
    <div>
      <div className="container mx-auto">
        <section>
          <div className="flex flex-grow justify-between">
            <span>
              <h2 className="text-3xl md:pl-8 font-cursive text-orange-500 mb-4">
                Шинэ сургалтууд
              </h2>
            </span>
          </div>
            
            <Swiper
              freeMode={true}
              grabCursor={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
                {data.map(i=>
                <SwiperSlide>
                    <Card
                        teacher={i.teacher}
                        courseImg={i.courseImg}
                        teacherImg={i.teacherImg}
                        courseName={i.courseName}
                        allVideos={i.allVideos}
                        view={i.view}
                        duration={i.duration}
                        students={i.students}
                    />
                </SwiperSlide>)}
              
            </Swiper>
          
        </section>
      </div>
    </div>
  );
};

export default Eswiper;