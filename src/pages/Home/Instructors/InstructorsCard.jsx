import React from 'react';
import { Link } from 'react-router-dom';
import './InstructorsCard.css';

const InstructorsCard = ({item}) => {
    const { _id, Instructors , Instructors_img, price, student } = item;
    return (
        <div className="card w-80 bg-base-300 shadow-xl instructor-img">
            <figure className="px-6 pt-6">
                <img src={Instructors_img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {Instructors}</h2>
                <h2 className="text-xl">Student: {student}</h2>
                <p className="text-xl text-orange-500">Price: ${price}</p>
            </div>
        </div>
    );
};

export default InstructorsCard;