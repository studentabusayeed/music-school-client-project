import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';

const AllClassesPage = ({ item }) => {
    const { _id, Instructors, classes, image, price, student, seat } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { itemId: _id, classes, Instructors, student, seat,  image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Course added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select the course',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            })
        }
    }

    return (
        <div className="card w-80 bg-base-300 shadow-xl instructor-img">
            <figure className="px-6 pt-2">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {classes}</h2>
                <h2 className="text-xl">Instructor name: {Instructors}</h2>
                <p className="text-xl">Available seats: {seat}</p>
                <p className="text-xl text-orange-500">Price: ${price}</p>
                <div className="card-actions">
                        <button onClick={() => handleAddCart(item)} className="btn btn-success text-slate-100">Select Button</button>
                </div>
            </div>
        </div>
    );
};

export default AllClassesPage;