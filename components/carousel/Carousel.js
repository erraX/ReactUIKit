import React from 'react'
import c from 'classnames'

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
        let curActiveSlide = this.state.activeSlide;
        let max = this.props.data.length;
        this.setState({
             activeSlide: curActiveSlide >= max - 1 ? 0 : curActiveSlide + 1,
        })
    }

    previousSlide() {
        let curActiveSlide = this.state.activeSlide;
        let max = this.props.data.length;
        this.setState({
             activeSlide: curActiveSlide === 0 ? max - 1 : curActiveSlide - 1,
        })
    }

    render() {
        let me = this;
        let carouselClass = c({
            'carousel-component': true,
            'show': this.state.show,
        })

        let slides = this.props.data.map((slide, idx) => <Slide key={slide.link} {...slide} active={this.state.activeSlide === idx} />)

        return (
            <div className="carousel-component">
                {slides}
            </div>
        )
    }
}

class Slide extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {

    }

    render () {
        return (
            <div>
                <a href={this.props.link}>
                    <img src={this.props.backgroundUrl} />
                </a>
            </div>
        )
    }
}

