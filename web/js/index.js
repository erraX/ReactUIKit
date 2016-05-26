import '../css/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'components/carousel/Carousel';

const carouselData = [
    {
        backgroundUrl: '/assets/bg1.png',
        link: 'http://www.baidu.com',
    },
    {
        backgroundUrl: '/assets/bg2.png',
        link: 'http://www.zhihu.com',
    },
    {
        backgroundUrl: '/assets/bg2.png',
        link: 'http://www.sina.com.cn',
    },
];

ReactDOM.render(
    <Carousel
        data={carouselData}
        time={3000}
    />,
    document.getElementById('main')
);
