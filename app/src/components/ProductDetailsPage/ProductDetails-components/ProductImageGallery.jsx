import React, { Component, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "../../../assets/swiper/swiper-bundle.min.css";
function ProductImageGallery(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // if (props.elements) {
  //   console.log(props);
  // }
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
            {props.elements
              ? props.elements.map((element) =>
                  element.type != "Manufacturer-Brochure" &&
                  element.type != "Original" &&
                  element.type != "User-Manual" ? (
                    <SwiperSlide key={element.type}>
                      <figure className="product-image">
                        <img
                          src={`https://content.etilize.com/${element.type}/${props.id}.jpg`}
                          data-zoom-image={`https://content.etilize.com/${element.type}/${props.id}.jpg`}
                          alt={element.type}
                          width="800"
                          height="900"
                        />
                      </figure>
                    </SwiperSlide>
                  ) : (
                    ""
                  )
                )
              : ""}
          </Swiper>
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
            {props.elements
              ? props.elements.map((element) =>
                  element.type != "Manufacturer-Brochure" &&
                  element.type != "Original" &&
                  element.type != "User-Manual" ? (
                    <SwiperSlide key={element.type}>
                      <figure className="product-image">
                        <img
                          src={`https://content.etilize.com/${element.type}/${props.id}.jpg`}
                          data-zoom-image={`https://content.etilize.com/${element.type}/${props.id}.jpg`}
                          alt={element.type}
                          width="800"
                          height="900"
                        />
                      </figure>
                    </SwiperSlide>
                  ) : (
                    ""
                  )
                )
              : ""}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ProductImageGallery;
