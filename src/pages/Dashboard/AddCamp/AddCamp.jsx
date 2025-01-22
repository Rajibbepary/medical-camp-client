import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { GiCampfire } from "react-icons/gi";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddCamp = () => {

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
        const menuItem = {
            professional: data.professinalname,
            name: data.campname,
            location: data.location,
            campFees: parseFloat(data.fees),
            dateTime: data.datetime,
            participants: data.participant,
            description: data.description,
            image: res.data.data.display_url
        }
        console.log(menuItem)
        const menuRes = await axiosSecure.post('/menu', menuItem);
        console.log(menuRes.data)
        if(menuRes.data.insertedId){
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added to the menu.`,
                showConfirmButton: false,
                timer: 1500
              });
        }
       }
       console.log('with image url', res.data)
    }; 
    return (
       <div>
        <Helmet>
                <title>MCMS | Add a Camp</title>
              </Helmet>
       <SectionTitle subHeading={"What's Now"} heading={"Add A Camp"}></SectionTitle>
       <div className="w-10/12 mx-auto bg-[hsla(0,0%,95%,1)] p-6">
            <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full mb-2">
        
        <div className="label">
          <span className="label-text">Healthcare Professional Name *</span>
         
        </div>
        <input
        {...register("professinalname", {required:true})}
        type="text" placeholder="professinal name" className="input input-bordered w-full" />
        
      </label>

      <label className="form-control w-full mb-2">
  <div className="label">
    <span className="label-text">Camp Name*</span>
  </div>
  <input
  {...register("campname", {required:true})}
  type="text" placeholder="camp name" className="input input-bordered w-full" />
  
</label>
<div className="lg:flex gap-4">
<label className="form-control w-full ">
  <div className="label">
    <span className="label-text">Location*</span>
  </div>
  <input
  {...register("location", {required:true})}
  type="text" placeholder="location" className="input input-bordered w-full" />
  
</label>

<label className="form-control w-full">
  <div className="label">
    <span className="label-text">Camp Fees*</span>
  </div>
  <input
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
  {...register("datetime", {required:true})}
  type="date" placeholder="date time" className="input input-bordered w-full" />
  
</label>

<label className="form-control w-full">
  <div className="label">
    <span className="label-text">Participant Count
    *</span>
  </div>
  <input
  {...register("participant", {required:true})}
  type="number" placeholder="participant" className="input input-bordered w-full" />
  
</label>

</div>
<label className="form-control">
  <div className="label">
    <span className="label-text">Description</span>
   
  </div>
  <textarea
  {...register("description", {required:true})}
  className="textarea textarea-bordered h-20" placeholder="description"></textarea>
</label>
<div className="my-4">
<input
 {...register("image", {required:true})}
type="file" className="file-input w-full max-w-xs" />
</div>
    <button className="btn bg-gradient-to-r from-[#5d03ccd8] from-10% via-[#292484] via-30% to-[#231501] to-90% text-white">
        Add Camp <GiCampfire className=" text-red-400 text-2xl" />
    </button>
    </form>
            </div>
       
       </div>
    );
};

export default AddCamp;