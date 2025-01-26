


import { useState } from "react";
import useJoinCamp from "../../../hooks/useJoinCamp";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const UserRegister = () => {
  const [camps] = useJoinCamp();
  const [campData, setCampData] = useState(camps);
  const totalfees = camps?.reduce((total, item) => total + (item.fees || 0), 0);
  const handlePayment = async (id) => {
    const transactionId = "txn_" + Math.random().toString(36).substring(7);
    const updatedCamps = campData.map((camp) =>
      camp._id === id
        ? { ...camp, paymentStatus: "Paid", transactionId }
        : camp
    );
    setCampData(updatedCamps);
    //alert(`Payment Successful! Transaction ID: ${transactionId}`);
  };

  const handleCancel = (id) => {
    const updatedCamps = campData.filter((camp) => camp._id !== id);
    setCampData(updatedCamps);
    toast.success("Registration canceled successfully.");
  };

  const handleFeedback = (id) => {
    toast.success(`Thanks For You Provide feedback : ${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-start gap-5 flex-row mb-3 bg-slate-300 p-3">
      <h1 className="text-2xl font-bold ">Registered Camps</h1>
        <h3 className="text-xl">Total Fees {totalfees}</h3>
       <Link to='/dashboard/payment'>
        <button className="btn  bg-green-500">Pay Naw</button>
       </Link>
      
      </div>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Camp Name</th>
            <th className="border px-4 py-2">Camp Fees</th>
            <th className="border px-4 py-2">Participant Name</th>
            <th className="border px-4 py-2">Payment Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campData.map((camp) => (
            <tr key={camp._id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{camp.campname}</td>
              <td className="border px-4 py-2">${camp.fees}</td>
              <td className="border px-4 py-2">{camp.pro}</td>
              <td className="border px-4 py-2">
                {camp.paymentStatus === "Paid" ? (
                  <span className="text-green-500">Paid</span>
                ) : (
                 
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => handlePayment(camp._id)}
                  >
                    Pay
                  </button>
                
                )}
              </td>
              {/* <td className="border px-4 py-2">{camp.confirmationStatus}</td> */}
              <td className="border px-4 py-2 space-x-2 flex">
                {camp.paymentStatus === "Paid" && (
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded"
                    onClick={() => handleFeedback(camp.campname)}
                  >
                    Feedback
                  </button>
                )}
                <button
                  className={`${
                    camp.paymentStatus === "Paid"
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-red-500 text-white"
                  } px-2 py-1 rounded`}
                  disabled={camp.paymentStatus === "Paid"}
                  onClick={() => handleCancel(camp._id)}
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

export default UserRegister;

