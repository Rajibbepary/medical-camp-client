import { Link, useLocation, useNavigate} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const CampCard = ({ camp }) => {
const {image, name, fees, date, time,location, doctor, participants, _id}  = camp;
const [participant] = useCart();

const { user }= useAuth();
const navigate = useNavigate();
const loCation = useLocation();
const axiosSecure = useAxiosSecure();
const [, refetch] = useCart();
  const handleAddToCamp = () =>{
    if(user && user.email){
      
       const campItem = {
          campId:_id,
          email:user.email,
          name,
          image,
          fees,
          date,
          time,
          doctor,
          location,
          participants
       }
       axiosSecure.post('/carts', campItem)
       .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Join Camp Add Success",
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
        }
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
              <p className="text-gray-700">👥 Participants: {participant.length}</p>
             <Link >
             <button
             onClick={handleAddToCamp}
            className="btn btn-outline border-0 mt-4 bg-slate-100 border-orange-300 border-b-4" >
            View Details
          </button>
             </Link>
            
            </div>
    );
};

export default CampCard;