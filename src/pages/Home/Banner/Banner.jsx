import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from '../../../assets/slider/slider1.jpg';
import slide2 from '../../../assets/slider/slider2.jpg';
import slide3 from '../../../assets/slider/slider3.jpg';
import slide4 from '../../../assets/slider/slider4.jpg';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={slide1} />
                <p className="legend">
                    <h3 className='text-3xl font-semibold text-center text-slate-300'>Guitar</h3>
                    <p className='text-2xl font-semibold text-center text-slate-500'>
                        The guitar is a string instrument which is played by plucking the strings.
                    </p>
                </p>
            </div>
            <div>
                <img src={slide2} />
                <p className="legend">
                    <h3 className='text-3xl font-semibold text-center text-slate-300'>Pianos</h3>
                    <p className='text-2xl font-semibold text-center text-slate-500'>
                        Pianos use the keys to move hammers that hit strings inside, making a sound.
                    </p>
                </p>
            </div>
            <div>
                <img src={slide3} />
                <p className="legend">
                    <h3 className='text-3xl font-semibold text-center text-slate-300'>Bongo</h3>
                    <p className='text-2xl font-semibold text-center text-slate-500'>
                        Bongos are an Afro-Cuban percussion instrument consisting of a pair of small open-bottomed hand drums of different sizes.
                    </p>
                </p>
            </div>
            <div>
                <img src={slide4} />
                <p className="legend">
                    <h3 className='text-3xl font-semibold text-center text-slate-300'>Violin</h3>
                    <p className='text-2xl font-semibold text-center text-slate-500'>
                        The violin is sometimes known as a fiddle. bowed stringed musical instruments that evolved during the Renaissance from earlier bowed instruments.
                    </p>
                </p>
            </div>
        </Carousel>
    );
};

export default Banner;