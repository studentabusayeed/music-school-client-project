import React from 'react';
import { Helmet } from 'react-helmet-async';

const AllInstructors = ({ item }) => {
    const { _id, Instructors, Instructors_img, email } = item;
    return (
        <div>
            <Helmet>
                <title>Music School | Instructors</title>
            </Helmet>
            <div className="card w-80 bg-slate-200 shadow-xl instructor-img">
                <figure className="px-6 pt-6">
                    <img src={Instructors_img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {Instructors}</h2>
                    <h2 className="text-xl">Email: {email}</h2>
                </div>
            </div>
        </div>
    );
};

export default AllInstructors;