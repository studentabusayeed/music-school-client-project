import React from 'react';
import usePayment from '../../../hooks/usePayment';

const PaymentHistory = () => {
    const [payment] = usePayment();
    console.log(payment);
    return (
        <>
        <h4 className='text-orange-500 text-center mb-5 font-semibold'>Payment History page</h4>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>TransactionId</th>
                        <th>Email</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        payment.map((pay, index) => <tr
                            key={pay._id}
                        >
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                {pay.transactionId}
                            </td>
                            <td className="font-semibold">
                                {pay.email}
                            </td>
                            <td className="text-start font-semibold">${pay.price}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        </>
    );
};

export default PaymentHistory;