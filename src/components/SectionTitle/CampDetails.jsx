import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
import axios from "axios";


const CampDetails = () => {
  const { id } = useParams(); 
  const [camp, setCamp] = useState({});
  const [showModal, setShowModal] = useState(false);
  
  useEffect(()=> {
    fetchCampDetails()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const  fetchCampDetails = async () => {
    const { data } = await axios.get('http://localhost:5000/camp')
    setCamp(data)
  }

console.log(camp.data)


  return (
    <div className="p-8">
      <img
        src={camp.image}
        alt={camp.name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{camp.name}</h1>
      <p>{camp.description}</p>
      <p>Date: {camp.date}</p>
      <p>Time: {camp.time}</p>
      <p>Location: {camp.location}</p>
      <p>Fees: ${camp.fees}</p>
      <p>Healthcare Professional: {camp.healthcareProfessional}</p>
      <p>Participants: {camp.participantCount}</p>
      <button
        onClick={() => setShowModal(true)}
        className="mt-4 bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
      >
        Join Camp
      </button>
      {showModal && <Modal camp={camp} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default CampDetails;
