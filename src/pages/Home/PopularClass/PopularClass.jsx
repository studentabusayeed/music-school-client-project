import React from 'react';
import useMenu from '../../../hooks/useMenu';
import Classes from '../Classes/Classes';

const PopularClass = () => {
    const [menu] = useMenu();
    console.log(menu);
    return (
        <div className='bg-slate-100 py-5'>
            <h2 className='text-3xl font-bold text-center mt-8'>Popular Music Class</h2>
            <p className='text-1xl text-center mt-2 mb-5 text-slate-500'>Music lessons are a type of formal instruction in playing a musical instrument or singing</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center my-5 bg-slate-100 p-20 rounded'>
                {
                    menu.slice(0,6).map(item => <Classes key={item._id} item={item}></Classes>)
                }
            </div>
        </div>
    );
};

export default PopularClass;