
import { useState, useEffect } from "react";
import useJoinCamp from "../../../../hooks/useJoinCamp";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const RegisteredCamps = () => {
  const [data , refetch] = useJoinCamp();
  const [campData, setCampData] = useState([]);
const axiosSecure = useAxiosSecure();
  useEffect(() => {
    if (data) {
      setCampData(data);
    }
  }, [data]);

  const handleConfirm = (id) => {
    setCampData((prevData) =>
      prevData.map((item) =>
        item._id === id ? { ...item, confirmationStatus: "Confirmed" } : item
      )
    );
  };

 

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/joincamps/${id}`)
        .then(res =>{
          if(res.data.deletedCount > 0){
            refetch();
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                 icon: "success"
            });
          }
        })
      }
    });
   
  };
  

  return (
    <div className="p-6">
      <Helmet>
              <title>MCMS | Registered Camps</title>
            </Helmet>
      <h2 className="text-2xl font-bold mb-4">Registered Camps</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Camp Name</th>
            <th className="px-4 py-2 border">Camp Fees</th>
            <th className="px-4 py-2 border">Participant Name</th>
            <th className="px-4 py-2 border">Payment Status</th>
            <th className="px-4 py-2 border">Confirmation Status</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campData.map((camp) => (
            <tr key={camp._id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border">{camp.campname}</td>
              <td className="px-4 py-2 border">${camp.fees}</td>
              <td className="px-4 py-2 border">{camp.name}</td>
              <td className="px-4 py-2 border">
                {camp.paymentStatus === "Paid" ? (
                  <span className="text-green-500 font-semibold">Paid</span>
                ) : (
                  <span className="text-red-500 font-semibold">Unpaid</span>
                )}
              </td>
              <td className="px-4 py-2 border">
                {camp.confirmationStatus === "Pending" ? (
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => handleConfirm(camp._id)}
                  >
                    Pending
                  </button>
                ) : (
                  <span className="text-green-500 font-semibold">Confirmed</span>
                )}
              </td>
              <td className="px-4 py-2 border">
                <button
                  className={`px-2 py-1 rounded ${
                    camp.paymentStatus === "Paid" &&
                    camp.confirmationStatus === "Confirmed"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-500 text-white"
                  }`}
                  onClick={() => handleCancel(camp._id)}
                  disabled={
                    camp.paymentStatus === "Paid" &&
                    camp.confirmationStatus === "Confirmed"
                  }
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegisteredCamps;


       