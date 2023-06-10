import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaChalkboardTeacher, FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
    // const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    });
    console.log(users);

    const handleInstructorUpdate = user => {
        // fetch(`http://localhost:5000/users/admin/${user._id}`, {
        //     method: 'PATCH'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.modifiedCount) {
        //             refetch();
        //             Swal.fire({
        //                 position: 'top-end',
        //                 icon: 'success',
        //                 title: `${user.name} is an Admin Now!`,
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             })
        //         }
        //     })
    }

    const handleAdminUpdate = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your selected user has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Music School | All Users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Instructor</th>
                            <th>Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td className="font-semibold">{user.name}</td>
                                <td className="font-semibold">{user.email}</td>
                                <td>{user.role === 'instructor' ? 'instructor' :
                                    <button onClick={() => handleInstructorUpdate(user)} className="btn btn-ghost bg-orange-600 text-white"><FaChalkboardTeacher></FaChalkboardTeacher></button>
                                }</td>
                                <td>{user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleAdminUpdate(user)} className="btn btn-ghost bg-orange-600 text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                                <td>                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;