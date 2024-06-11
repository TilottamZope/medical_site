import React from "react";
import Slider from "react-slick";
import "./HomeBanner.css";
import Banner1 from '../../Assets/Banner1.jpg'
import Banner2 from '../../Assets/Banner2.jpg'
import Banner3 from '../../Assets/Banner3.jpg'

const HomeBanner = (props) => {
  var settings = {
    dots : false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : true,
    autoplay : true
  };
  return (
    <div className="container mt-3">
      <div className="homeBannerSection">
        <Slider {...settings}>
          <div className="item">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/004/299/806/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" alt="Banner Not Found" className="w-100" />
          </div>
          <div className="item">
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-shop-banner-design-template-ced8d381ed48595c749de9949ff917ae_screen.jpg?ts=1600552562" alt="Banner Not Found" className="w-100" />
          </div>
          <div className="item">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/003/240/364/small/shopping-online-on-phone-paper-art-modern-pink-background-gifts-box-free-vector.jpg" alt="Banner Not Found" className="w-100" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeBanner;
