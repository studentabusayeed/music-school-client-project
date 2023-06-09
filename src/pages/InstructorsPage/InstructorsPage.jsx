import React from 'react';
import useMenu from '../../hooks/useMenu';
import AllInstructors from '../AllInstructors/AllInstructors';

const InstructorsPage = () => {
    const [menu] = useMenu();
    return (
        <div className='pt-28 bg-slate-200'>
            <div className='text-center'>
                <h3 className="text-2xl font-bold">All Instructors</h3>
                <p className='text-1xl text-center mt-2 mb-5 text-slate-500'>A good teacher is like a candle—it consumes itself to light the way for others.</p>
            </div>
            <div className="grid grid-cols-1 p-12 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {
                    menu.map(item => <AllInstructors
                        key={item._id}
                        item={item}
                    ></AllInstructors>)
                }
            </div>
        </div>
    );
};

export default InstructorsPage;