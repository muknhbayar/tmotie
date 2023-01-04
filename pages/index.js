import Categories from '../components/Categories';
import Header from '../components/Header';
import Videobanner from '../components/Videobanner';
import Eswiper from '../components/Eswiper';
import FeaturedSlider from '../components/FeaturedSlider';
import Instructors from '../components/Instructors';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Price from '../components/Price';



const index = () => {
  return (
    <div>
      <Header/>
      <Categories/>
      <div className="container md:px-20 md:mb-8"> <Eswiper/> </div>
      <div className="container md:mb-8" > <Videobanner/> </div>
      <div className="container md:px-20 md:mt-8"> <FeaturedSlider/> </div>
      <div className="container md:px-20 md:mt-8"> <Instructors/> </div>
      <Testimonials/>
      <Price/>
      <Footer/> 
  
      
    </div>
  )
}

export default index