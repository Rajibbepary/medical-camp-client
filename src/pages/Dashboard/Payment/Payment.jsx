
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div className="w-10/12 mx-auto"> 
             <SectionTitle subHeading={'please pay to camp'} heading={'Payment'}></SectionTitle>
             <div >
             <Elements stripe={stripePromise} >
                <CheckoutForm />
            </Elements>
             </div>
        </div>
    );
};

export default Payment;