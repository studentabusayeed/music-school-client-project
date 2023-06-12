import React from 'react';
import InstructorsCard from './InstructorsCard';
import useMenu from '../../../hooks/useMenu';

const Instructors = () => {
    const [menu] = useMenu();
    return (
        <div className='bg-slate-100 py-5'>
            <div className='text-center'>
                <h3 className="text-2xl font-bold">Popular Instructors</h3>
                <p className='text-1xl text-center mt-2 mb-5 text-slate-500'>Some qualities of a good teacher include skills in communication, listening, collaboration, adaptability, empathy and patience.</p>
            </div>
            <div className="grid grid-cols-1 bg-slate-100  md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 md:mx-10">
                {
                    menu.slice(0,6).map(item => <InstructorsCard
                        key={item._id}
                        item={item}
                    ></InstructorsCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;