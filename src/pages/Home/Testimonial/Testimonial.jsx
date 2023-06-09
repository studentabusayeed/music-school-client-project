import React from 'react';
import './Testimonial.css';
import layer1 from '../../../assets/Layer.png';
import layer2 from '../../../assets/Layer-1.png';
const Testimonial = () => {
    return (
        <div>
            <section className="testimonial-section bg-slate-400">
                <h3 className="testimonial-title">Student Feedback</h3>
                <h5 className='text-2xl font-semibold text-center mb-10 text-slate-200'>What Student Says</h5>
                <div className="testimonial-container px-20">
                    <div className="testimonial">
                        <p className="w-50 text-1xl font-semibold p-5">I learnt so much and find now I work in a kind of optimised way, not only saving so much time when I work on music by getting what I want quickly. I now just know what to do to improve a song with production. There's so much more scope now, so many more options.</p>
                        <div className="tests">
                            <img src={layer1} alt="" />
                            <div className="test">
                                <h4 className="font-bold text-2xl">Miller</h4>
                                <p className="text-1xl font-semibold text-orange-800">Singer</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial">
                        <p className="w-50 text-1xl font-semibold p-5">As someone from a teaching background, I was impressed with the structure of the course, how well it has been planned and how the tutors really care about giving you as much information as they can, generously imparting tricks & tips and sharing their experience and knowledge.</p>
                        <div className="tests">
                            <img src={layer2} alt="" />
                            <div className="test">
                                <h4 className="font-bold text-2xl">Rahim</h4>
                                <p className="text-1xl font-semibold text-orange-800">Singer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Testimonial;