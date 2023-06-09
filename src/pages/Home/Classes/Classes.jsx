import React from 'react';
import './Classes.css';

const Classes = ({ item }) => {
    return (
        // <div className="card card-compact w-80 bg-base-100 shadow-xl">
        //     <figure><img className='rounded' src={item.image} alt="Shoes" /></figure>
        // </div>
        <div className="card card-compact w-96 bg-base-400 shadow-xl class-img">
            <figure><img src={item.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-center text-2xl font-semibold">{item.classes}</h2>
            </div>
        </div>
    );
};

export default Classes;