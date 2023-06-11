import React from 'react';
import usePayment from '../../../hooks/usePayment';
import History from './History';

const PaymentHistory = () => {
    const [payment] = usePayment();
    console.log(payment);

    return (
        <>
            <h4 className='text-orange-500 text-center mb-5 font-semibold'>Payment History page</h4>
            <div className="divider">OR</div>
            {
                payment.map(pay => <History
                    key={pay._id}
                    pay={pay}
                ></History>)
            }
        </>
    );
};

export default PaymentHistory;