import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="w-2/4">
            <h2 className="text-3xl text-center mb-10">Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckOut cart={cart} price={price}></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;