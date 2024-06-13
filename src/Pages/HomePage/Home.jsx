import React from "react";
import "./Home.css";
import HomeBanner from "../HomeBanner/HomeBanner";
import banner1 from "../../Assets/Images/banner1.jpg";
import banner2 from "../../Assets/Images/banner2.jpg";
import banner3 from "../../Assets/Images/banner3.jpg";
import banner4 from "../../Assets/Images/banner4.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import ProductItem from "../../Components/ProductItem/ProductItem";
import HomeCat from "../../Components/HomeCategory/HomeCat";

const Home = () => {
  const [value, setValue] = React.useState(2);
  var productSliderOptions = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div>
      <HomeBanner />
      <HomeCat />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
              <div className="banner">
                <img
                  src={banner1}
                  alt="Banner Not Found"
                  className="cursor w-100"
                />
              </div>
              <div className="banner mt-4">
                <img
                  src={banner2}
                  alt="Banner Not Found"
                  className="cursor w-100"
                />
              </div>
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text text-sml mb-0">
                    Do not miss the current offers until the end of June.
                  </p>
                </div>
                <Button className="viewAllBtn ms-auto">
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  slidesPerGroup={1}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="d-flex align-items-center mt-5">
                <div className="info">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text text-sml mb-0">
                    New products with updated stock
                  </p>
                </div>
                <Button className="viewAllBtn ms-auto">
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="d-flex mt-4 mb-5 bannerSection">
              <div className="banner">
                <img
                  src={banner3}
                  alt="Banner Not Found"
                  className="cursor w-100"
                />
              </div>

              <div className="banner">
                <img
                  src={banner4}
                  alt="Banner Not Found"
                  className="cursor w-100"
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
