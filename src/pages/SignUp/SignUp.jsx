import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../shared/SocialLogin/SocialLogin";
// import Swal from 'sweetalert2'
import login from '../../assets/log-image.jpg';
import { Helmet } from "react-helmet-async";

const SignUp = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const password = useRef({});
    password.current = watch("password", "");

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                // updateUserProfile(data.name, data.photoURL)
                //     .then(() => {
                //         const saveUser = { name: data.name, email: data.email }
                //         fetch('http://localhost:5000/users', {
                //             method: 'POST',
                //             headers: {
                //                 'content-type': 'application/json'
                //             },
                //             body: JSON.stringify(saveUser)
                //         })
                //             .then(res => res.json())
                //             .then(data => {
                //                 if (data.insertedId) {
                //                     reset();
                //                     Swal.fire({
                //                         position: 'top-end',
                //                         icon: 'success',
                //                         title: 'User created successfully',
                //                         showConfirmButton: false,
                //                         timer: 1500
                //                     });
                //                     navigate('/');
                //                 }
                // })
                // })
                // .catch(error => console.log(error));
            })
            .then(err => console.log(err.message));
    };

    return (
        <>
            <Helmet>
                <title>Music School | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 py-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-1/3 ml-20">
                        <img className='rounded' src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less then 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one upper case one lower case, one number and one special characters</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='my-4 text-center'><small>Already have an account <Link className='text-orange-600 font-bold ms-1' to="/login">Login</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;