import { useState } from "react";
import Modal from "./Modal";
import { useLoaderData } from "react-router-dom";


const CampDetails = () => {
  const item = useLoaderData();
  console.log(item)
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="p-8 ">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{item.name}</h1>
      <p>{item.description}</p>
      <p>Date &Time: {item.dateTime}</p>
      <p>Location: {item.location}</p>
      <p>Fees: ${item.campFees}</p>
      <p>Healthcare Professional: {item.professional}</p>
      <p>Participants: {item.participants}</p>
      <button
        onClick={() => setShowModal(true)}
        className="mt-4 bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
      >
        Join Camp
      </button>
      {showModal && <Modal item={item} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default CampDetails;
