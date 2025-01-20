import { useState } from "react";
import Modal from "./Modal";
import { useLoaderData } from "react-router-dom";


const CampDetails = () => {
  const item = useLoaderData();
  console.log(item)
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="p-8">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{item.name}</h1>
      <p>{item.description}</p>
      <p>Date: {item.date}</p>
      <p>Time: {item.time}</p>
      <p>Location: {item.location}</p>
      <p>Fees: ${item.fees}</p>
      <p>Healthcare Professional: {item.healthcareProfessional}</p>
      <p>Participants: {item.participantCount}</p>
      <button
        onClick={() => setShowModal(true)}
        className="mt-4 bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
      >
        Join Camp
      </button>
      {showModal && <Modal camp={''} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default CampDetails;
