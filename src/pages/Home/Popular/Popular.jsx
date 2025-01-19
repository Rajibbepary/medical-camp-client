import { useEffect, useState } from "react";
import CampCard from "./CampCard";
import { Link } from "react-router-dom";


const Popular = () => {
    const [camps, setCamps] = useState([]);
     useEffect(() => {
        fetch("http://localhost:5000/popular")
          .then((res) => res.json())
          .then((data) => {
            setCamps(data);
          });
      }, []);
    
      // Function to increase participant count
      const handleJoin = (id) => {
        setCamps((prevCamps) =>
          prevCamps.map((camp) =>
            camp.id === id ? { ...camp, participants: camp.participants + 1 } : camp
          )
        );
      };
    return (
        <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Popular Medical Camps</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {camps.map((camp) => (
          <CampCard key={camp.id} camp={camp} onJoin={handleJoin} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to='/available'>
        <button className="mt-8 bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-900">
          See All Camps
        </button>
        </Link>
      </div>
    </div>
    );
};

export default Popular;