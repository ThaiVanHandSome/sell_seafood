import { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { sliders } from '~/data_static/slider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const items = sliders.map((slider, index) => {
    return {
        key: index,
        src: `${slider.img}`,
    };
});

function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                key={item.key}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img style={{ borderRadius: '20px' }} src={item.src} alt={item.altText} />
                <CarouselCaption className="text-danger" captionText={item?.caption} captionHeader={item?.caption} />
            </CarouselItem>
        );
    });

    const handlePrev = () => {
        const ele = document.querySelector('.control-left');
        ele.click();
    };

    const handleNext = () => {
        const ele = document.querySelector('.control-right');
        ele.click();
    };

    return (
        <div className={cx('slider-wrapper')}>
            <style>
                {`.custom-tag {
              max-width: 100%;
            }`}
            </style>
            <Carousel interval={4000} activeIndex={activeIndex} next={next} previous={previous}>
                {slides}
            </Carousel>
            <div className={cx('slider-control')}>
                <div className={cx('slider-control-btn', 'slider-control-btn-left')} onClick={previous}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <div className={cx('slider-control-btn', 'slider-control-btn-right')} onClick={next}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </div>
            <div className={cx('slider-indicators')}>
                {items.map((item) => (
                    <div
                        className={cx('slider-indicators-item', {
                            active: activeIndex === item.key,
                        })}
                        onClick={() => goToIndex(item.key)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slider;
