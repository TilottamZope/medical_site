import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const HomeCat = () => {
  return (
    <div>
      <div className="homeCat">
        <div className="container">
            <h3 className="hd2 mb-3">Featured Category</h3>
          <Swiper
            slidesPerView={10}
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            slidesPerGroup={3}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="item text-center">
                <img
                  src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1717998255_Himalaya.png?format=auto"
                  alt="category img not found"
                />
                <h6>Himalaya</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item text-center">
                <img
                  src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718172211_Glucon+D.png?format=auto"
                  alt="category img not found" 
                />
                <h6>Himalaya</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item text-center">
                <img
                  src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718172196_Cetaphil.png?format=auto"
                  alt="category img not found" 
                />
                <h6>Himalaya</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item text-center">
                <img
                  src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1717998255_Himalaya.png?format=auto"
                  alt="category img not found"
                />
                <h6>Himalaya</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item text-center">
                <img
                  src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718172211_Glucon+D.png?format=auto"
                  alt="category img not found" 
                />
                <h6>Himalaya</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item text-center">
                <img
                  src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718172196_Cetaphil.png?format=auto"
                  alt="category img not found" 
                />
                <h6>Himalaya</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item text-center">
                <img
                  src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1717998255_Himalaya.png?format=auto"
                  alt="category img not found"
                />
                <h6>Himalaya</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item text-center">
                <img
                  src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718172211_Glucon+D.png?format=auto"
                  alt="category img not found" 
                />
                <h6>Himalaya</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item text-center">
                <img
                  src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718172196_Cetaphil.png?format=auto"
                  alt="category img not found" 
                />
                <h6>Himalaya</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item text-center">
                <img
                  src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1717998255_Himalaya.png?format=auto"
                  alt="category img not found"
                />
                <h6>Himalaya</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item text-center">
                <img
                  src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718172211_Glucon+D.png?format=auto"
                  alt="category img not found" 
                />
                <h6>Himalaya</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item text-center">
                <img
                  src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718172196_Cetaphil.png?format=auto"
                  alt="category img not found" 
                />
                <h6>Himalaya</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item text-center">
                <img
                  src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1717998255_Himalaya.png?format=auto"
                  alt="category img not found"
                />
                <h6>Himalaya</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item text-center">
                <img
                  src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718172211_Glucon+D.png?format=auto"
                  alt="category img not found" 
                />
                <h6>Himalaya</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item text-center">
                <img
                  src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718172196_Cetaphil.png?format=auto"
                  alt="category img not found" 
                />
                <h6>Himalaya</h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeCat;
