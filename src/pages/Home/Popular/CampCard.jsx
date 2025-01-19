import { Link, useLocation, useNavigate} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const CampCard = ({ camp }) => {
const {image, name, fees, date, time,location, doctor, participants, _id}  = camp;
const { user }= useAuth();
const navigate = useNavigate();
const loCation = useLocation();
  const handleAddToCamp = medical =>{
    if(user && user.email){
      console.log(user.email, medical)
       const campItem = {
          campId:_id,
          email:user.email,
          name,
          image,
          fees,
          date,
          time,
          location,
          participants
       }
       axios.post('http://localhost:5000/carts', campItem)
       .then(res => {
        console.log(res.data)
       })

    }else{
      Swal.fire({
        title: "You are not Logged In?",
        text: "Please login to add to the camp!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
        navigate('/login', {state: {from: loCation}})
        }
      });
    }

  }


    return (

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-2xl font-bold mt-4">{name}</h2>
              <p className="text-gray-700">💰 Fees: {fees}</p>
              <p className="text-gray-700">📅 Date: {date}</p>
              <p className="text-gray-700">🕒 Time: {time}</p>
              <p className="text-gray-700">📍 Location: {location}</p>
              <p className="text-gray-700">👨‍⚕️ Doctor: {doctor}</p>
              <p className="text-gray-700">👥 Participants: {participants}</p>
             <Link >
             <button
             onClick={() =>handleAddToCamp(camp) }
            className="btn btn-outline border-0 mt-4 bg-slate-100 border-orange-300 border-b-4" >
            View Details
          </button>
             </Link>
            
            </div>
    );
};

export default CampCard;