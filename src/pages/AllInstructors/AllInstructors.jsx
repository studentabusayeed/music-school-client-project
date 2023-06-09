import React from 'react';

const AllInstructors = ({ item }) => {
    const { _id, Instructors, Instructors_img, email } = item;
    return (
        <div className="card w-96 bg-slate-200 shadow-xl instructor-img">
            <figure className="px-6 pt-6">
                <img src={Instructors_img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {Instructors}</h2>
                <h2 className="text-xl">Email: {email}</h2>
            </div>
        </div>
    );
};

export default AllInstructors;