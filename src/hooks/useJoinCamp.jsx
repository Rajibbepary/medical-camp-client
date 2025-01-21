import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from './useAuth';

const useJoinCamp = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: camp = []} = useQuery({
        queryKey:['registercamp', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/joincamps?email=${user.email}`)
            return res.data;
        }
    })
    return[camp]
};

export default useJoinCamp;
