import React from 'react';
import Banner from '../../../assets/images/shop/banner1.jpg';
import Mf1 from '../../../assets/images/brands/category/1.png';
import Mf2 from '../../../assets/images/brands/category/2.png';
import Mf3 from '../../../assets/images/brands/category/3.png';
import Mf4 from '../../../assets/images/brands/category/4.png';
import Mf5 from '../../../assets/images/brands/category/5.png';
import Mf7 from '../../../assets/images/brands/category/7.png';
import Cat1 from '../../../assets/images/categories/category-1.jpg';
import Cat2 from '../../../assets/images/categories/category-2.jpg';
import Cat3 from '../../../assets/images/categories/category-3.jpg';
import Cat4 from '../../../assets/images/categories/category-4.jpg';
import Cat5 from '../../../assets/images/categories/category-5.jpg';
import Cat6 from '../../../assets/images/categories/category-6.jpg';
import Cat7 from '../../../assets/images/categories/category-7.jpg';
import Cat8 from '../../../assets/images/categories/category-8.jpg';

const MainSlider = () => {
  return (
    <div class="page-content">
      <div class="container">
        <div
          class="shop-default-banner banner d-flex align-items-center mb-5 br-xs"
          style={{ backgroundImage: `url(${Banner})`, backgroundColor: '#FFC74E' }}>
          <div class="banner-content">
            <h4 class="banner-subtitle font-weight-bold">Accessories Collection</h4>
            <h3 class="banner-title text-white text-uppercase font-weight-bolder ls-normal">Smart Wrist Watches</h3>
            <a href="shop-banner-sidebar.html" class="btn btn-dark btn-rounded btn-icon-right">
              Discover Now<i class="w-icon-long-arrow-right"></i>
            </a>
          </div>
        </div>

        <div class="shop-default-brands mb-5">
          <div
            class="brands-swiper swiper-container swiper-theme "
            data-swiper-options="{
                                'slidesPerView': 2,
                                'breakpoints': {
                                    '576': {
                                        'slidesPerView': 3
                                    },
                                    '768': {
                                        'slidesPerView': 4
                                    },
                                    '992': {
                                        'slidesPerView': 6
                                    },
                                    '1200': {
                                        'slidesPerView': 7
                                    }
                                },
                                'autoplay': {
                                    'delay': 4000,
                                    'disableOnInteraction': false
                                }
                            }">
            <div class="swiper-wrapper row gutter-no cols-xl-7 cols-lg-6 cols-md-4 cols-sm-3 cols-2">
              <div class="swiper-slide">
                <figure>
                  <img src={Mf1} alt="Brand" width="160" height="90" />
                </figure>
              </div>
              <div class="swiper-slide">
                <figure>
                  <img src={Mf2} alt="Brand" width="160" height="90" />
                </figure>
              </div>
              <div class="swiper-slide">
                <figure>
                  <img src={Mf3} alt="Brand" width="160" height="90" />
                </figure>
              </div>
              <div class="swiper-slide">
                <figure>
                  <img src={Mf4} alt="Brand" width="160" height="90" />
                </figure>
              </div>
              <div class="swiper-slide">
                <figure>
                  <img src={Mf5} alt="Brand" width="160" height="90" />
                </figure>
              </div>
              <div class="swiper-slide">
                <figure>
                  <img src={Mf5} alt="Brand" width="160" height="90" />
                </figure>
              </div>
              <div class="swiper-slide">
                <figure>
                  <img src={Mf7} alt="Brand" width="160" height="90" />
                </figure>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="shop-default-category category-ellipse-section mb-6">
          <div
            class="swiper-container swiper-theme shadow-swiper"
            data-swiper-options="{
                            'spaceBetween': 20,
                            'slidesPerView': 2,
                            'breakpoints': {
                                '480': {
                                    'slidesPerView': 3
                                },
                                '576': {
                                    'slidesPerView': 4
                                },
                                '768': {
                                    'slidesPerView': 6
                                },
                                '992': {
                                    'slidesPerView': 7
                                },
                                '1200': {
                                    'slidesPerView': 8,
                                    'spaceBetween': 30
                                }
                            }
                        }">
            <div class="swiper-wrapper row gutter-lg cols-xl-8 cols-lg-7 cols-md-6 cols-sm-4 cols-xs-3 cols-2">
              <div class="swiper-slide category-wrap">
                <div class="category category-ellipse">
                  <figure class="category-media">
                    <a href="shop-banner-sidebar.html">
                      <img
                        src={Cat1}
                        alt="Categroy"
                        width="190"
                        height="190"
                        // style={{ backgroundColor: '#5C92C0' }}
                      />
                    </a>
                  </figure>
                  <div class="category-content">
                    <h4 class="category-name">
                      <a href="shop-banner-sidebar.html">Sports</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="swiper-slide category-wrap">
                <div class="category category-ellipse">
                  <figure class="category-media">
                    <a href="shop-banner-sidebar.html">
                      <img src={Cat2} alt="Categroy" width="190" height="190" style={{ backgroundColor: '#B8BDC1' }} />
                    </a>
                  </figure>
                  <div class="category-content">
                    <h4 class="category-name">
                      <a href="shop-banner-sidebar.html">Babies</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="swiper-slide category-wrap">
                <div class="category category-ellipse">
                  <figure class="category-media">
                    <a href="shop-banner-sidebar.html">
                      <img src={Cat3} alt="Categroy" width="190" height="190" style={{ backgroundColor: '#99C4CA' }} />
                    </a>
                  </figure>
                  <div class="category-content">
                    <h4 class="category-name">
                      <a href="shop-banner-sidebar.html">Sneakers</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="swiper-slide category-wrap">
                <div class="category category-ellipse">
                  <figure class="category-media">
                    <a href="shop-banner-sidebar.html">
                      <img src={Cat4} alt="Categroy" width="190" height="190" style={{ backgroundColor: '#4E5B63' }} />
                    </a>
                  </figure>
                  <div class="category-content">
                    <h4 class="category-name">
                      <a href="shop-banner-sidebar.html">Cameras</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="swiper-slide category-wrap">
                <div class="category category-ellipse">
                  <figure class="category-media">
                    <a href="shop-banner-sidebar.html">
                      <img src={Cat5} alt="Categroy" width="190" height="190" style={{ backgroundColor: '#D3E5EF' }} />
                    </a>
                  </figure>
                  <div class="category-content">
                    <h4 class="category-name">
                      <a href="shop-banner-sidebar.html">Games</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="swiper-slide category-wrap">
                <div class="category category-ellipse">
                  <figure class="category-media">
                    <a href="shop-banner-sidebar.html">
                      <img src={Cat6} alt="Categroy" width="190" height="190" style={{ backgroundColor: '#65737C' }} />
                    </a>
                  </figure>
                  <div class="category-content">
                    <h4 class="category-name">
                      <a href="shop-banner-sidebar.html">Kitchen</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="swiper-slide category-wrap">
                <div class="category category-ellipse">
                  <figure class="category-media">
                    <a href="shop-banner-sidebar.html">
                      <img src={Cat7} alt="Categroy" width="190" height="190" style={{ backgroundColor: '#E4E4E4' }} />
                    </a>
                  </figure>
                  <div class="category-content">
                    <h4 class="category-name">
                      <a href="shop-banner-sidebar.html">Watches</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="swiper-slide category-wrap">
                <div class="category category-ellipse">
                  <figure class="category-media">
                    <a href="shop-banner-sidebar.html">
                      <img src={Cat8} alt="Categroy" width="190" height="190" style={{ backgroundColor: '#D3D8DE' }} />
                    </a>
                  </figure>
                  <div class="category-content">
                    <h4 class="category-name">
                      <a href="shop-banner-sidebar.html">Clothes</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
