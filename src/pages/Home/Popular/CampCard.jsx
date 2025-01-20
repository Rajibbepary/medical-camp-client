import { Link} from "react-router-dom";


const CampCard = ({ camp }) => {
const {image, name, campFees, location, professional, dateTime, participants, }  = camp;


    return (

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-2xl font-bold mt-4">{name}</h2>
              <p className="text-gray-700">💰 Fees: {campFees}</p>
              {/* <p className="text-gray-700">📅 Date: {dateTime}</p> */}
              <p className="text-gray-700">🕒 Date Time: {dateTime}</p>
              <p className="text-gray-700">📍 Location: {location}</p>
              <p className="text-gray-700">👨‍⚕️ Doctor: {professional}</p>
              <p className="text-gray-700">👥 Participants: {participants}</p>
             <Link to={`/campdetails/${camp._id}`} >
             <button
            className="btn btn-outline border-0 mt-4 bg-slate-100 border-orange-300 border-b-4" >
            View Details
          </button>
             </Link>
            
            </div>
    );
};

export default CampCard;