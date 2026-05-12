import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import brand1 from "../../assets/brands/amazon.png";
import brand2 from "../../assets/brands/amazon_vector.png";
import brand3 from "../../assets/brands/casio.png";
import brand4 from "../../assets/brands/moonstar.png";
import brand5 from "../../assets/brands/randstad.png";
import brand6 from "../../assets/brands/start-people 1.png";
import brand7 from "../../assets/brands/start.png";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

const Brands = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="uppercase tracking-[4px] text-secondary font-semibold mb-4">
            Trusted Partners
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-secondary leading-tight">
            Brands We Collaborate With
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Partnering with world-famous food brands to deliver quality meals,
            trusted flavors, and unforgettable experiences.
          </p>
        </div>

        <div className="mt-16">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="h-36 bg-white rounded-3xl border border-gray-200 flex items-center justify-center p-8 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">
                  <img
                    src={brand}
                    alt="brand-logo"
                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition duration-500"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Brands;
