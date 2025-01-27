import axios from "axios";

 const axiosSecure = axios.create({
    baseURL:'https://medical-camp-server-q8vfu0j8x-rajib21s-projects.vercel.app'
})
const useAxiosSecure = () => {
    
    return axiosSecure;
};

export default useAxiosSecure;
