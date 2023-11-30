import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";


const CheckoutForm = () => {

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    const {id} = useParams()
    // console.log('id', id);

    const {data } = useQuery({
        queryKey : ['registeredCampPayment', id],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/registered-participant/${id}`)
            return res?.data;
        }
    })
    
    const campFee = data?.fee;
    console.log('id data', campFee);

    useEffect(() => {
        if (campFee) {
            console.log('total price', campFee);
            axiosSecure.post('/create-payment-intent', { price: campFee })
                .then(res => {
                    console.log(res.data);
                    setClientSecret(res.data?.clientSecret)
                })
        }
    }, [axiosSecure, campFee])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        }
        else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        if (clientSecret == '') {
            return;
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })

        if (confirmError) {
            console.log('confirm error');
        }
        else {
            console.log('payment intent', paymentIntent);
        }
        if (paymentIntent.status === 'succeeded') {
            console.log('transaction id', paymentIntent.id);
            setError('');
            setTransactionId(paymentIntent.id)
            const payment = {
                email: user?.email,
                fee: campFee,
                campId:data?.campId,
                transactionId: paymentIntent.id,
                date: new Date(),

                status: 'pending'
            }

            const res = await axiosSecure.post(`/payments/${id}`, payment)
            console.log(res.data);
            if (res.data?.paymentResult?.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Payment done successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/dashboard/payment-history')
            }
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: 'white',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className="flex justify-center my-4">
                <button className={`py-2 px-6 rounded-md  font-bold uppercase mt-4 first-letter bg-blue-600 `} type="submit" disabled={!stripe}>
                    Pay Now
                </button>
            </div>
            <p>{error}</p>
            <p className={`text-lg font-semibold ${transactionId ? '' : 'hidden'}`}>
                Transaction Id : <span className="text-red-500">{transactionId}</span></p>
        </form>
    );
};

export default CheckoutForm;