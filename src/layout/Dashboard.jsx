import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center bg-orange-100 pl-10">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-slate-300">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full text-base-content font-semibold">
                    {
                        isAdmin && <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/manageclass"><FaWallet></FaWallet> Manage Class</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> Manage Users</NavLink></li>
                        </>
                    }
                    {
                        isInstructor && <>
                            <li><NavLink to="/dashboard/instructorhome"><FaHome></FaHome>Instructor Home</NavLink></li>
                            <li><NavLink to="/dashboard/addclass"><FaUtensils></FaUtensils> Add a Class</NavLink></li>
                            <li><NavLink to="/dashboard/paymenthistoy"><FaWallet></FaWallet> My Class</NavLink></li>
                        </>
                    }
                    {
                        !isAdmin && !isInstructor ? <>
                            <li><NavLink to="/dashboard/userhome"><FaHome></FaHome>User Home</NavLink></li>
                            <li><NavLink to="/dashboard/paymenthistoy"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Selected Classes
                                    <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>
                            </li>
                            <li><NavLink to="/dashboard/myenrooledclass"><FaCalendarAlt></FaCalendarAlt> My Enrolled Classes</NavLink></li>
                        </> : ''
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/instructors">Instructors</NavLink></li>
                    <li><NavLink to="/classes">Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;