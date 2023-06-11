import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from '../../../assets/slider/slider1.jpg';
import slide2 from '../../../assets/slider/slider2.jpg';
import slide3 from '../../../assets/slider/slider3.jpg';
import slide4 from '../../../assets/slider/slider4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[650px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slide1} className="w-full" />
                <div className="absolute rounded-xl flex items-center h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-4xl font-bold'>Guitar</h2>
                        <p>The guitar is a string instrument which is played by plucking the strings.</p>
                        <div>
                            <button className="btn btn-success mr-5">More Information</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slide2} className="w-full" />
                <div className="absolute rounded-xl flex items-center h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-4xl font-bold'>Pianos</h2>
                        <p>Pianos use the keys to move hammers that hit strings inside, making a sound.</p>
                        <div>
                            <button className="btn btn-success mr-5">More Information</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slide3} className="w-full" />
                <div className="absolute rounded-xl flex items-center h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-4xl font-bold'>Bongo</h2>
                        <p>Bongos are an Afro-Cuban percussion instrument consisting of a pair of small open-bottomed hand drums of different sizes.</p>
                        <div>
                            <button className="btn btn-success mr-5">More Information</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={slide4} className="w-full" />
                <div className="absolute rounded-xl flex items-center h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-4xl font-bold'>Violin</h2>
                        <p>The violin is sometimes known as a fiddle. bowed stringed musical instruments that evolved during the Renaissance from earlier bowed instruments.</p>
                        <div>
                            <button className="btn btn-success mr-5">More Information</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;