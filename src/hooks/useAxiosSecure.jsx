import axios from "axios";

 const axiosSecure = axios.create({
    baseURL:'https://medical-camp-server-iota.vercel.app'
})
const useAxiosSecure = () => {
    
    return axiosSecure;
};

export default useAxiosSecure;
