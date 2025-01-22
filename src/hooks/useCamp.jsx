//import { useQuery } from "@tanstack/react-query";
//import useAxiosSecure from "./useAxiosSecure";
import { useEffect, useState } from "react";


const useCamp = () => {
    const [camp, setCamp] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/camp')
        .then(res => res.json())
        .then(data => {
            setCamp(data);
            setLoading(false);
        });
    }, [])
// const {data: camp = [], isPending: loading, refetch} = useQuery({
//     queryKey:['camp'],
//     queryFn: async() =>{
//         const res = await useAxiosSecure.get('/camp');
//         return res.data;
//     }
// })

return [camp, loading]

};

export default useCamp;

