import React from 'react';
import useAuth from '../../../hooks/useAuth';

const InstructorHome = () => {
    const {user} = useAuth();
    return (
        <div className="w-full m-4">
            <h2 className="text-3xl text-center mb-5">Instructor page</h2>
            <div className="stats shadow">

                <div className="stat bg-orange-400">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title text-white mb-2">Instructor Name</div>
                    <div className="stat-value">${user.displayName}</div>
                    <div className="stat-desc text-white mt-3">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat bg-orange-400">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title text-white mb-2">Instructor Email</div>
                    <div className="stat-value">{user.email}</div>
                    <div className="stat-desc text-white mt-3">↗︎ 400 (22%)</div>
                </div>

            </div>
        </div>
    );
};

export default InstructorHome;