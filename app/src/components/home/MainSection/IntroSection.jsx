import React, { Component } from 'react';
import Men from '../../../assets/images/demos/demo1/sliders/men.png';
import Shose from '../../../assets/images/demos/demo1/sliders/shoes.png';
import Skate from '../../../assets/images/demos/demo1/sliders/skate.png';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
class IntroSection extends Component {
  render() {
    SwiperCore.use([Autoplay]);
    return (
      <section className="intro-section">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div
              className="swiper-slide banner banner-fixed intro-slide intro-slide1"
              style={{
                backgroundImage: 'url(../../../assets/images/demos/demo1/sliders/slide-1.jpg)',
                backgroundColor: '#ebeef2',
              }}
            >
              <div className="container">
                <figure className="slide-image skrollable slide-animate">
                  <img
                    src={Shose}
                    alt="Banner"
                    data-bottom-top="transform: translateY(10vh);"
                    data-top-bottom="transform: translateY(-10vh);"
                    width="474"
                    height="397"
                  />
                </figure>
                <div className="banner-content y-50 text-right">
                  <h5 className="banner-subtitle font-weight-normal text-default ls-50 lh-1 mb-2 slide-animate">
                    Custom <span className="p-relative d-inline-block">Men’s</span>
                  </h5>
                  <h3 className="banner-title font-weight-bolder ls-25 lh-1 slide-animate">RUNNING SHOES</h3>
                  <p className="font-weight-normal text-default slide-animate">
                    Sale up to <span className="font-weight-bolder text-secondary">30% OFF</span>
                  </p>

                  <button className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate">
                    SHOP NOW<i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiper-slide banner banner-fixed intro-slide intro-slide2"
              style={{
                backgroundImage: 'url(assets/images/demos/demo1/sliders/slide-2.jpg)',
                backgroundColor: '#ebeef2',
              }}
            >
              <div className="container">
                <figure className="slide-image skrollable slide-animate">
                  <img
                    src={Men}
                    alt="Banner"
                    data-bottom-top="transform: translateX(10vh);"
                    data-top-bottom="transform: translateX(-10vh);"
                    width="480"
                    height="633"
                  />
                </figure>
                <div className="banner-content d-inline-block y-50">
                  <h5 className="banner-subtitle font-weight-normal text-default ls-50 slide-animate">
                    Mountain-<span className="text-secondary">Climbing</span>
                  </h5>
                  <h3 className="banner-title font-weight-bolder text-dark mb-0 ls-25 slide-animate">Hot & Packback</h3>
                  <p className="font-weight-normal text-default slide-animate">Only until the end of this week.</p>
                  <button className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate">
                    SHOP NOW<i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiper-slide banner banner-fixed intro-slide intro-slide3"
              style={{
                backgroundImage: 'url(assets/images/demos/demo1/sliders/slide-3.jpg)',
                backgroundColor: '#f0f1f2',
              }}
            >
              <div className="container">
                <figure className="slide-image skrollable slide-animate">
                  <img
                    src={Skate}
                    alt="Banner"
                    data-bottom-top="transform: translateY(10vh);"
                    data-top-bottom="transform: translateY(-10vh);"
                    width="310"
                    height="444"
                  />
                </figure>
                <div className="banner-content text-right y-50">
                  <p className="font-weight-normal text-default text-uppercase mb-0 slide-animate">Top weekly Seller</p>
                  <h5 className="banner-subtitle font-weight-normal text-default ls-25 slide-animate">
                    Trending Collection
                  </h5>
                  <h3 className="banner-title p-relative font-weight-bolder ls-50 slide-animate">
                    <span className="text-white mr-4">Roller</span>-skate
                  </h3>
                  <button className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate">
                    SHOP NOW<i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    );
  }
}

export default IntroSection;
