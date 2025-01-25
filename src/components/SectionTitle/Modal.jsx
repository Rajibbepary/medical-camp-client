
import { useForm } from 'react-hook-form';
import useAuth from './../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Modal = ({ camp, onClose }) => {
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
    const {name, campFees,location, professional} = camp;
    const { register, handleSubmit, reset} = useForm()
  
    const onSubmit= async(data) => {
      console.log(data) 
     if(user && user.email){
      const registrationCamp = {
          name: data.participantName,
          email: data.participantEmail,
          age: parseFloat(data.age),
          fees:campFees,
          pro:professional,
          campname:name,
          phone: data.phone,
          gender: data.gender,
          Contact:data.emergencyContact
      }
       axiosSecure.post('/joincamps', registrationCamp)
          .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
              reset();
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${name} is added to the Joinscamp.`,
                  showConfirmButton: false,
                  timer: 1500
                });
          }
          })
     }

  }; 
    
    return (
        <div className="fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center w-9/12 mx-auto">
        <div className="bg-white p-6 rounded shadow-lg">
         <form onSubmit={handleSubmit(onSubmit)} className='gap-3 '>
         <h2 className="text-xl font-bold mb-2">Register for </h2>
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p>Fees: ${campFees}</p>
          <p>Location: {location}</p>
          <p>Healthcare Professional: {professional}</p>
         <input
            type="text"
            name="participantName"
            {...register("participantName")}
            placeholder="Your Name"
           defaultValue={user?.displayName}
          // disabled
            className="w-full p-2 border rounded mb-2 mt-4"
          />
          <input
            type="email"
            name="participantEmail"
            placeholder="Your Email"
            {...register("participantEmail")}
            disabled
            defaultValue={user?.email}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            name="age"
            {...register("age" ,{required:true})}
            placeholder="Age"
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            name="phone"
            {...register("phone", {required:true})}
            placeholder="Phone Number"
            className="w-full p-2 border rounded mb-2"
          />
           <select
        defaultValue='default'
       {...register("gender", {required:true})}
      className="select select-bordered w-full mb-2">
            <option disabled value='default'>Select a Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
    </select>
          <input
            type="text"
            name="emergencyContact"
            {...register("emergencyContact", {required:true})}
            placeholder="Emergency Contact"
            className="w-full p-2 border rounded mb-2"
          />
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" >
            Submit
         </button>
          <button onClick={onClose} className="ml-4 bg-gray-300 py-2 px-4 rounded">
            Cancel
          </button>
         </form>
        </div>
      </div>
    );
};

export default Modal;

    
// Programming-Hero Instructors
// data.fees= fees
// data.time= new\Date
      