import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://images.jazelc.com/uploads/wowwoodys/SEO-2017_Ram_2500_Laramie_Longhorn_Towing_wowwoodys-1200x480.jpg'
  },
  {
    src: 'https://dcdws.blob.core.windows.net/dws-3948215-3185-media/2018/02/2015-chevrolet-silverado-midnight-030-1.jpg1_.jpg'
  },
  {
    src: 'https://images.jazelc.com/uploads/sampackgroup/2017/10/2015_FordF-450_SuperDuty_02-1200x480.jpg'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;