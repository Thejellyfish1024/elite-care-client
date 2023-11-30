import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    return (
        <div className="flex flex-col justify-center items-center p-5 lg:p-0">
            <h2 className="text-3xl font-bold text-center my-10">Payment Details</h2>
             <div className="lg:w-1/2 w-full  md:p-8 p-2 rounded-md  bg-gray-800 text-white">
                <Elements  stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;