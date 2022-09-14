import { useState } from 'react';
import { checkImage } from '../../../../common';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';

const Gallery = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [section] = useState(null);
  const { productElements, productid } = product;
  return (
    <div className="col-md-6 mb-5">
      {/* Main Slider Images Mapping */}

      <div className="banner banner-video product-video br-xs">
        <Swiper
          loop={false}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2">
          {productElements.length > 0 ? (
            productElements.map((element) =>
              checkImage(element.type) ? (
                <SwiperSlide>
                  <img
                    src={`https://content.etilize.com/${element.type}/${productid}.jpg?noimage=logo`}
                    alt="banner"
                    id={section ? 'gallery-image' : 'swiper-image'}
                    width="610"
                    height="300"
                  />
                  <h3 id={section ? 'gallery-image-tag' : 'swiper-image-tag'} style={{ textAlign: 'center' }}>
                    {element.type}
                  </h3>
                </SwiperSlide>
              ) : (
                ''
              ),
            )
          ) : (
            <SwiperSlide>
              <img
                src={`https://content.etilize.com/main/${productid}.jpg?noimage=logo`}
                alt="banner"
                id={section ? 'gallery-image' : 'swiper-image'}
              />
              <h3 id={section ? 'gallery-image-tag' : 'swiper-image-tag'} style={{ textAlign: 'center' }}>
                Logo
              </h3>
            </SwiperSlide>
          )}
        </Swiper>
      </div>

      {/* Small Slider Images Mapping */}

      <div className="row mb-4 thumb" style={{ maxWidth: '500px', overflow: 'hidden' }}>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={false}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          navigation={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper">
          {productElements.map((element) =>
            checkImage(element.type) ? (
              <SwiperSlide>
                <img
                  onClick={() => console.log(setThumbsSwiper)}
                  src={`https://content.etilize.com/${element.type}/${productid}.jpg?noimage=logo`}
                  alt={element.type}
                  // onClick={(e) => galleryShow(e.target.src, e.target.alt, section ? 'gallery-image' : 'swiper-image')}
                />
              </SwiperSlide>
            ) : (
              ''
            ),
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
