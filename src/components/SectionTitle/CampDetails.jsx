import { useState } from "react";
import Modal from "./Modal";
import { useLoaderData } from "react-router-dom";


const CampDetails = () => {
  const camp = useLoaderData();
  const {name, image,description, dateTime,location, campFees, professional, _id } = camp;
  const [updatedCamp, setUpdatedCamp] = useState(camp);
  console.log(camp)
  const [showModal, setShowModal] = useState(false);
  
  const handleJoinCamp = () => {
    setUpdatedCamp((prevCamp) => ({
      ...prevCamp,
      participants: prevCamp.participants + 1,
    }));
  };

  
  return (
    <div className="p-8 ">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{name}</h1>
      <p>Description: {description}</p>
      <p>Date &Time: {dateTime}</p>
      <p>Location: {location}</p>
      <p>Fees: ${campFees}</p>
      <p>Healthcare Professional: {professional}</p>
      <p>Participants: {updatedCamp.participants}</p>
      <button
        //onClick={() => setShowModal(true)}
        //onClick={() => handleJoinCamp(camp.id)}
        onClick={() => {
          setShowModal(true);
          handleJoinCamp(_id);
        }}
        className="mt-4 bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
      >
        Join Camp
      </button>
      {showModal && <Modal camp={camp} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default CampDetails;
