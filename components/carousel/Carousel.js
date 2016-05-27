import React from 'react';
import c from 'classnames';

const noop = function () {}

const defaults = {
    data: {},
    width: 300,
    height: 300,
    autoplay: false,
    autoplaySpeed: 5000,
    fade: false,
    initialSlide: 0,
    infinite: true,
    direction: 'horizontal',
    onInit: noop,
    beforeChange: noop,
    afterChange: noop,
}

export default class Carousel extends React.Component {
    constructor(){
        super()
        this.state = {
            activeSlide: 0,
        }
    }

    componentDidMount() {
    }

    nextSlide() {
        let curActiveSlide = this.state.activeSlide
        let max = this.props.data.length
        this.setState({
             activeSlide: curActiveSlide >= max - 1 ? 0 : curActiveSlide + 1,
        })
    }

    previousSlide() {
        let curActiveSlide = this.state.activeSlide
        let max = this.props.data.length
        this.setState({
             activeSlide: curActiveSlide === 0 ? max - 1 : curActiveSlide - 1,
        })
    }

    handlePrevious(evt) {
        this.previousSlide()
    }

    handleNext(evt) {
        this.nextSlide()
    }

    render() {
        let carouselClass = c({
            'carousel-component': true,
        })

        let slides = this.props.data.map((slide, idx) => <Slide key={slide.link} {...slide} active={this.state.activeSlide === idx} />)

        return (
            <div className="carousel-component">
                {slides}
                <i className="carousel-btn-left carousel-btn" onClick={::this.handlePrevious}></i>
                <i className="carousel-btn-right carousel-btn" onClick={::this.handleNext}></i>
            </div>
        )
    }
}

class Slide extends React.Component {
    constructor() {
        super()
        this.state = {
            startX: 0,
            startY: 0, 
            endX: 0, 
            endY: 0,
        }
    }

    componentDidMount() {

    }

    render () {
        let slideClass = c({
            slide: true,
            hide: !this.props.active,
        })

        let style = {
            position: 'absolute',
            top: this.state.y,
            left: this.state.x,
        }

        return (
            <div
                className={slideClass}
                style={style}
            >
                <a href={this.props.link} target="_blank">
                    <img src={this.props.backgroundUrl} />
                </a>
            </div>
        )
    }
}

