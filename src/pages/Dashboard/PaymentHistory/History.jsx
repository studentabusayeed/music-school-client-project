import React from 'react';
import useAuth from '../../../hooks/useAuth';

const History = ({ pay }) => {
    const { user } = useAuth();
    const userEmail = pay.email === user.email;
    return (
        <div>
            { userEmail &&
                        <div className="card w-full bg-base-300 my-2">
                        <div className="card-body">
                            <h2 className="card-title">Email: {pay.email}</h2>
                            <p className='my-1'>TransactionId: {pay.transactionId}</p>
                            <p>Price: {pay.price}</p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default History;