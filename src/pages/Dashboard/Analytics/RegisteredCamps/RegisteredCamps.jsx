
import useCart from './../../../../hooks/useCart';

const RegisteredCamps = () => {
    const [cart] = useCart();
   console.log(cart)
    return (
        <div className='w-11/12 mx-auto'> 
            <h1 className='text-center mt-5 text-2xl font-semibold'>All Registered Camps {cart.length}</h1>
         
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Camp Name</th>
        <th>Fees</th>
        <th>Partcipant Name</th>
        <th>Payment</th>
        <th>Status</th>
        <th>Cancel</th>
      </tr>
    </thead>
    <tbody>
    {
        cart.map(item=> <tr key={item._id}>
            <th>1</th>
            <td>{item.name}</td>
            <td>{item.fees}</td>
            <td>{item.doctor}</td>
            
          </tr>
          
         )
         
    }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default RegisteredCamps;