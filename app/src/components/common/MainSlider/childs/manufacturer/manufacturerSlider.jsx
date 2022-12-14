import React from 'react';
import { manufacturers } from './manufacturer';
import { HashLink } from 'react-router-hash-link';

const ManufacturerSlider = () => {
  return (
    <div className="shop-default-brands mb-5" id="products">
      <div
        className="brands-swiper swiper-container swiper-theme "
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
        <div className="swiper-wrapper row gutter-no cols-xl-7 cols-lg-6 cols-md-4 cols-sm-3 cols-2">
          {manufacturers.map((obj, index) => (
            <div className="swiper-slide" key={index}>
              <figure>
                <HashLink to={`/home/?flag=onlyManufacture&manufacturerid=${obj.mfg_id}#products`}>
                  <img src={obj.image} alt="Brand" width="160" height="90" style={{ filter: 'grayscale(100%)' }} />
                </HashLink>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManufacturerSlider;
