import React, { Component, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "../../../assets/swiper/swiper-bundle.min.css";
import Img1 from "../../../assets/images/products/default/1-800x900.jpg";
import Img2 from "../../../assets/images/products/default/2-800x900.jpg";
import Img3 from "../../../assets/images/products/default/3-800x900.jpg";
import Img4 from "../../../assets/images/products/default/4-800x900.jpg";
import Img5 from "../../../assets/images/products/default/5-800x900.jpg";
import Img6 from "../../../assets/images/products/default/6-800x900.jpg";
function ProductImageGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="product-gallery product-gallery-sticky">
        <div className="swiper-container product-single-swiper swiper-theme nav-inner">
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            // className="swiper-container product-single-swiper swiper-theme nav-inner swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
          >
            <SwiperSlide>
              <figure className="product-image">
                <img
                  src={Img1}
                  data-zoom-image={Img1}
                  alt="Electronics Black Wrist Watch"
                  width="800"
                  height="900"
                />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className="product-image">
                <img
                  src={Img2}
                  data-zoom-image={Img2}
                  alt="Electronics Black Wrist Watch"
                  width="488"
                  height="549"
                />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className="product-image">
                <img
                  src={Img3}
                  data-zoom-image={Img3}
                  alt="Electronics Black Wrist Watch"
                  width="800"
                  height="900"
                />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className="product-image">
                <img
                  src={Img4}
                  data-zoom-image={Img4}
                  alt="Electronics Black Wrist Watch"
                  width="800"
                  height="900"
                />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className="product-image">
                <img
                  src={Img5}
                  data-zoom-image={Img5}
                  alt="Electronics Black Wrist Watch"
                  width="800"
                  height="900"
                />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className="product-image">
                <img
                  src={Img6}
                  data-zoom-image={Img6}
                  alt="Electronics Black Wrist Watch"
                  width="800"
                  height="900"
                />
              </figure>
            </SwiperSlide>
          </Swiper>
          {/* <div className=" swiper-container"> */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={false}
            watchSlidesProgress={true}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="product-thumbs-wrap"
          >
            <SwiperSlide>
              <img
                src={Img1}
                data-zoom-image={Img1}
                alt="Electronics Black Wrist Watch"
                width="800"
                height="900"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Img2}
                data-zoom-image={Img2}
                alt="Electronics Black Wrist Watch"
                width="488"
                height="549"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Img3}
                data-zoom-image={Img3}
                alt="Electronics Black Wrist Watch"
                width="800"
                height="900"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Img4}
                data-zoom-image={Img4}
                alt="Electronics Black Wrist Watch"
                width="800"
                height="900"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Img5}
                data-zoom-image={Img5}
                alt="Electronics Black Wrist Watch"
                width="800"
                height="900"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Img6}
                data-zoom-image={Img6}
                alt="Electronics Black Wrist Watch"
                width="800"
                height="900"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* </div> */}
      {/* <div className="product-gallery product-gallery-sticky">
        <div className="swiper-container product-single-swiper swiper-theme nav-inner">
          <div className="swiper swiper-wrapper row cols-1 gutter-no">
            <div className="swiper-slide">
              
            </div>
            <div className="swiper-slide">
              
            </div>
            <div className="swiper-slide">
              
            </div>
            <div className="swiper-slide">
              
              </figure>
            </div>
            <div className="swiper-slide">
              
                <img
                  src="assets/images/products/default/5-800x900.jpg"
                  data-zoom-image="assets/images/products/default/5-800x900.jpg"
                  alt="Electronics Black Wrist Watch"
                  width="800"
                  height="900"
                />
              </figure>
            </div>
            <div className="swiper-slide">
              <figure className="product-image">
                <img
                  src="assets/images/products/default/6-800x900.jpg"
                  data-zoom-image="assets/images/products/default/6-800x900.jpg"
                  alt="Electronics Black Wrist Watch"
                  width="800"
                  height="900"
                />
              </figure>
            </div>
          </div>
          <button className="swiper-button-next"></button>
          <button className="swiper-button-prev"></button>
          <a href="#" className="product-gallery-btn product-image-full">
            <i className="w-icon-zoom"></i>
          </a>
        </div>
        <div className="product-thumbs-wrap swiper-container">
          <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
            <div className="product-thumb swiper-slide">
              <img src={Img1} alt="Product Thumb" width="800" height="900" />
            </div>
            <div className="product-thumb swiper-slide">
              <img src={Img1} alt="Product Thumb" width="800" height="900" />
            </div>
            <div className="product-thumb swiper-slide">
              <img
                src={Img2}
                alt="Product Thumb"
                width="800"
                height="900"
              />
            </div>
            <div className="product-thumb swiper-slide">
              <img
                src="assets/images/products/default/4-800x900.jpg"
                alt="Product Thumb"
                width="800"
                height="900"
              />
            </div>
            <div className="product-thumb swiper-slide">
              <img
                src="assets/images/products/default/5-800x900.jpg"
                alt="Product Thumb"
                width="800"
                height="900"
              />
            </div>
            <div className="product-thumb swiper-slide">
              <img
                src="assets/images/products/default/6-800x900.jpg"
                alt="Product Thumb"
                width="800"
                height="900"
              />
            </div>
          </div>
          <button className="swiper-button-next"></button>
          <button className="swiper-button-prev"></button>
        </div>
      </div> */}
    </>
  );
}

export default ProductImageGallery;
