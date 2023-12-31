import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import SocialLogin from '../shared/SocialLogin/SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import login from '../../assets/log-image.jpg';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error));

    }

    return (
        <>
            <Helmet>
                <title>Music School | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 pt-24 pb-2">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-1/3 ml-20">
                        <img className='rounded' src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100 rounded">
                        <form onSubmit={handleLogin} className="card-body w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-1 text-center'>New Here?<Link className='text-orange-600 font-bold ms-1' to="/signup">Create an account</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;