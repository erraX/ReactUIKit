import React from 'react'
import c from 'classnames'
import u from '../../util/util'

const noop = function () {}

export default class Carousel extends React.Component {
    constructor() {
        super()
        this.state = {
            activeSlide: 0,
        }
    }

    static defaultProps = {
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
        const props = this.props;
        const state = this.state;

        let carouselClass = c({
            'carousel-component': true,
        })

        let slides = this.props.data.map(
            (slide, idx) =>
                <Slide
                    key={slide.link}
                    {...slide}
                    direction={props.direction}
                    width={props.width}
                    height={props.height}
                    active={state.activeSlide === idx}
                    idx={idx}
                    activeIdx={state.activeSlide}
                />
        )

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
    }

    translate() {
        const props = this.props
        let offset = 0

        if (props.direction === 'horizontal') {
            offset = (props.idx - props.activeIdx) * props.width
        }
        else {
            offset = (props.idx - props.activeIdx) * props.height
        }

        return offset;
    }

    render () {
        const props = this.props

        let slideClass = c({
            slide: true,
            // hide: !props.active,
        })

        let style = {
            position: 'absolute',
            transform: props.direction === 'horizontal' ? `translateX(${this.translate()}px)` : `translateY(${this.translate()}px)`
        }

        return (
            <div
                className={slideClass}
                style={style}
            >
                <a href={this.props.link} target="_blank">
                    <img src={props.backgroundUrl} />
                </a>
            </div>
        )
    }
}

