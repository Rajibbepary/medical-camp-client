
import { useQuery } from '@tanstack/react-query';
import useAuth from './../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';



const PaymentHistory = () => {
 
    const { user } = useAuth();
   // console.log(user);
    const axiosSecure = useAxiosSecure();
    const {data: payments =[], } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
      
    })
    
console.log(payments)
    

    return (
        <div>
            <h2>Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
 
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Fees</th>
        <th>Transaction Id</th>
        <th>Payment Status</th>
      </tr>
    </thead>
    <tbody>
      {
        payments.map((payment, index) =><tr key={payment._id}>
        <th>{index + 1}</th>
        {user.displayName}
        <td>$ {payment.fees}</td>
        <td>{payment.transactionId}</td>
        <td >{payment.status}</td>
      </tr>)
      }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;

