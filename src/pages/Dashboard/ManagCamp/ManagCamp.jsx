import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCamp from "../../../hooks/useCamp";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { RxUpdate } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManagCamp = () => {

const [camp, refetch] = useCamp();
console.log(refetch)
const axiosSecure = useAxiosSecure();
const handleDeleteItem = (item) =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then( async (result) => {
        if (result.isConfirmed) {
         const res = await axiosSecure.delete(`/camp/${item._id}`)
         if(res.data.deletedCount > 0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title:`${item.name} has been deleted` ,
                showConfirmButton: false,
                timer: 1500
              });
         }
        }
      });

}


    return (
        <div>
           <Helmet>
                       <title>MCMS | Manag Camps</title>
                     </Helmet>
            <SectionTitle subHeading={'See All Camps'} heading={'Manag A Camp'}></SectionTitle>

            <div className="bg-slate-100 p-8 rounded-md shadow-2xl my-6" >
              <h1 className="text-2xl font-semibold mb-3">TOTAL CAMP: {camp.length}</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead className="bg-[#293747] p-3 text-white">
      <tr>
        <th>
         #
        </th>
        <th>Camp Name</th>
        <th>Date & Time</th>
        <th>Location</th>
        <th> Healthcare Professional</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {

        camp.map((item, index) => <tr key={item._id}>
        <th>
         {index + 1}
        </th>
        <td>
        {item.name}
        </td>
        <td>
        {item.dateTime}
        </td>
        <td>{item.location}</td>
        <td>{item.professional}</td>
        <td>
       <Link to={`/dashboard/updateItem/${item._id}`}>
       <button className="btn btn-ghost "><RxUpdate className="text-2xl text-red-500"/></button>
       </Link>
        </td>
        <td>
        <button 
          onClick={() => handleDeleteItem(item)}
         className="btn btn-ghost "><MdDelete className="text-2xl text-red-500"/></button>
        </td>
      </tr>)
      }
      
    </tbody>
    
  </table>
</div>
            </div>
        </div>
    );
};

export default ManagCamp;