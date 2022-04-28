
import React from 'react';
import { Carousel } from 'react-bootstrap'



class Hero extends React.Component {
    render() {
        const img = this.props.img;
        return(
        <div>
        <div className='carousel__caption'>
            <h1 id='teks-weeding'>The Wedding Ceremony Of</h1>
            <h1 id='teks'>Romy & Rani</h1>
        </div>
        <Carousel fade nextIcon={false} prevIcon={false} interval={2000} touch={false}>
            <Carousel.Item>
                <div className='fill'>
                    <img
                        className="carousel__img "
                        src={img[0].img}
                        alt="First slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="carousel__img"
                src={img[1].img}
                alt="Second slide"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="carousel__img"
                src={img[2].img}
                alt="Third slide"
            />
            </Carousel.Item>
        </Carousel>
        
        </div>

        
        );
    };
}

export default Hero;