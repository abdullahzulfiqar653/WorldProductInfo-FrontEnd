import React from 'react';
import { manufacturers } from './manufacturer';

const ManufacturerSlider = () => {
  return (
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
          {manufacturers.map((obj) => (
            <div class="swiper-slide" style={{ paddingRight: 15 }}>
              <figure>
                <img src={obj.image} alt="Brand" width="160" height="90" />
              </figure>
            </div>
          ))}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default ManufacturerSlider;
