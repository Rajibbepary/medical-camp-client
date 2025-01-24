import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import useRegisterCamp from "../../../hooks/useRegisterCamp";




const CheckoutForm = () => {

    const [error, setError] = useState('')
    const[clientSecret, setClientSecret] =useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const[campfees] = useRegisterCamp()
    const totalfees= campfees.reduce( (total, item) => total + item.fees, 0)

    useEffect(() =>{
        axiosSecure.post('/create-payment-intent', {price: totalfees})
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
    }, [axiosSecure, totalfees])

    
    
        const handleSubmit = async (event) => {
          event.preventDefault();
          
        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
            setError(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
          }


        };
      


    return (
        <form onSubmit={handleSubmit}> 
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
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
            <button className="btn btn-sm btn-primary my-4" type="submit"
            
            disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-500">{error}</p>
        </form>
    );
};

export default CheckoutForm;