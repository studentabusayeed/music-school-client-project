import React from 'react';
import AllClassesPage from '../AllClassesPage/AllClassesPage';
import useMenu from '../../hooks/useMenu';

const AllClasses = () => {
    const [menu] = useMenu();
    return (
        <div className='pt-28 bg-slate-200'>
            <div className='text-center'>
                <h3 className="text-2xl font-bold">All Classes</h3>
                <p className='text-1xl text-center mt-2 mb-5 text-slate-500'>Education is our passport to the future, for tomorrow belongs to the people who prepare for it today</p>
            </div>
            <div className="grid grid-cols-1 p-12 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                {
                    menu.map(item => <AllClassesPage
                        key={item._id}
                        item={item}
                    ></AllClassesPage>)
                }
            </div>
        </div>
    );
};

export default AllClasses;