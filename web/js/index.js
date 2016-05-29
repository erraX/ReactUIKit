import '../css/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'components/carousel/Carousel';

const carouselData = [
    {
        backgroundUrl: '/web/assets/1.png',
        link: 'http://www.baidu.com',
    },
    {
        backgroundUrl: '/web/assets/2.png',
        link: 'http://www.zhihu.com',
    },
    {
        backgroundUrl: '/web/assets/3.png',
        link: 'http://www.sina.com.cn',
    },
];

ReactDOM.render(
    <Carousel
        data={carouselData}
        time={3000}
        width={167}
        height={300}
    />,
    document.getElementById('main')
);
