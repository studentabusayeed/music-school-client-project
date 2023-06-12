import React from 'react';
import useCart from '../../../hooks/useCart';

const ManageClass = () => {
    const [cart] = useCart();
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class</th>
                            <th>price</th>
                            <th>Action1</th>
                            <th>Action2</th>
                            <th>Action3</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="font-semibold">
                                    {item.classes}
                                </td>
                                <td className="text-start font-semibold">${item.price}</td>
                                <td>
                                    <button className="btn btn-sm">Approve</button>
                                </td>
                                <td>
                                    <button className="btn btn-sm">Deny</button>
                                </td>
                                <td>
                                    <button className="btn btn-sm">Feedback</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;