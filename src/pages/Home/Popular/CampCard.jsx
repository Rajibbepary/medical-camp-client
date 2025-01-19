import { Link} from "react-router-dom";

const CampCard = ({ camp }) => {

    return (

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src={camp.image} alt={camp.name} className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-2xl font-bold mt-4">{camp.name}</h2>
              <p className="text-gray-700">💰 Fees: {camp.fees}</p>
              <p className="text-gray-700">📅 Date: {camp.date}</p>
              <p className="text-gray-700">🕒 Time: {camp.time}</p>
              <p className="text-gray-700">📍 Location: {camp.location}</p>
              <p className="text-gray-700">👨‍⚕️ Doctor: {camp.doctor}</p>
              <p className="text-gray-700">👥 Participants: {camp.participants}</p>
             <Link to={`/camp-details/${camp._id}`} >
             <button
            className="btn btn-outline border-0 mt-4 bg-slate-100 border-orange-300 border-b-4" >
            View Details
          </button>
             </Link>
            
            </div>
    );
};

export default CampCard;