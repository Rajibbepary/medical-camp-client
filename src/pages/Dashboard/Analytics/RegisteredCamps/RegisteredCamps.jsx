import useJoinCamp from "../../../../hooks/useJoinCamp";



const RegisteredCamps = () => {
   const [join] = useJoinCamp()
    return (
        <div className='w-11/12 mx-auto'> 
            <h1 className='text-center mt-5 text-2xl font-semibold'>All Registered Camps {join.length}</h1>
         
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
    
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default RegisteredCamps;