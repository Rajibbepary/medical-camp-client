import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const FeedBack = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=> {
        fetch('feedback.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <section className="w-11/12 mx-auto">
            <SectionTitle subHeading={'What,s our participant say'} heading={'Feedbake'}></SectionTitle>
            
            <Swiper navigation={true} modules={[Navigation]}
            
            autoplay={{ delay: 1000 }}className="mySwiper">
        
        {
            reviews.map(review => <SwiperSlide
            key={review._id}
            >
                <div className="flex flex-col items-center  mx-24 my-16">
                <Rating
                     style={{ maxWidth: 180 }}
                     value={review.rating}
                     readOnly
                    />
                    <FaQuoteLeft className="text-5xl mt-6 mb-6" />
                   
                    <p className="py-4">{review.feedback}</p>
                    <h1 className="text-2xl text-orange-400">{review.name}</h1>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
        </section>
    );
};

export default FeedBack;