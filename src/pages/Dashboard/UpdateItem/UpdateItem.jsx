import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { GiCampfire } from "react-icons/gi";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
    const { name, dateTime,professional, location, description, campFees, participants, _id} = useLoaderData();
   
    const { register, handleSubmit, reset } = useForm()
    const axiosSecure = useAxiosSecure();
    const onSubmit= async(data) => {
        console.log(data) 
        const imageFile ={image: data.image[0]}
        const res = await axiosSecure.post(image_hosting_api,imageFile,{
           headers:{
            'content-type' : 'multipart/form-data'
           }
        });

       if(res.data.success){
        const campItem = {
            professional: data.professinalname,
            name: data.campname,
            location: data.location,
            campFees: parseFloat(data.fees),
            dateTime: data.datetime,
            participants: data.participant,
            description: data.description,
            image: res.data.data.display_url
        }
        console.log(campItem)
        const campRes = await axiosSecure.patch(`/camp/${_id}`, campItem);
        console.log(campRes.data)
        if(campRes.data.modifiedCount > 0){
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.campname} is Update to the camp.`,
                showConfirmButton: false,
                timer: 1500
              });
        }
       }
       
    }; 

    return (
        <div>
              <div className="w-10/12 mx-auto bg-[hsla(0,0%,95%,1)] p-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="form-control w-full mb-2">
                    
                    <div className="label">
                      <span className="label-text">Healthcare Professional Name *</span>
                     
                    </div>
                    <input
                    defaultValue={ professional}
                    {...register("professinalname", {required:true})}
                    type="text" placeholder="professinal name" className="input input-bordered w-full" />
                    
                  </label>
            
                  <label className="form-control w-full mb-2">
              <div className="label">
                <span className="label-text">Camp Name*</span>
              </div>
              <input
              defaultValue={name}
              {...register("campname", {required:true})}
              type="text" placeholder="camp name" className="input input-bordered w-full" />
              
            </label>
            <div className="lg:flex gap-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Location*</span>
              </div>
              <input
              defaultValue={location}
              {...register("location", {required:true})}
              type="text" placeholder="location" className="input input-bordered w-full" />
              
            </label>
            
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Camp Fees*</span>
              </div>
              <input
              defaultValue={campFees}
              {...register("fees", {required:true})}
              type="number" placeholder="fees" className="input input-bordered w-full" />
              
            </label>
            
            </div>
            
            <div className="lg:flex gap-4">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Date & Time*</span>
              </div>
              <input
              defaultValue={dateTime}
              {...register("datetime", {required:true})}
              type="date" placeholder="date time" className="input input-bordered w-full" />
              
            </label>
            
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Participant Count
                *</span>
              </div>
              <input
              defaultValue={participants}
              {...register("participant", {required:true})}
              type="number" placeholder="participant" className="input input-bordered w-full" />
              
            </label>
            
            </div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Description</span>
               
              </div>
              <textarea
              defaultValue={description}
              {...register("description", {required:true})}
              className="textarea textarea-bordered h-20" placeholder="description"></textarea>
            </label>
            <div className="my-4">
            <input
            //defaultValue={image}
             {...register("image", {required:true})}
            type="file" className="file-input w-full max-w-xs" />
            </div>
                <button className="btn bg-gradient-to-r from-[#5d03ccd8] from-10% via-[#292484] via-30% to-[#231501] to-90% text-white">
                    Update Camp <GiCampfire className=" text-red-400 text-2xl" />
                </button>
                </form>
                        </div>
                   
        </div>
    );
};

export default UpdateItem;