

//import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCamp = () => {
    // const [camp, setCamp] = useState([]);
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     fetch('http://localhost:5000/camp')
    //     .then(res => res.json())
    //     .then(data => {
    //         setCamp(data);
    //         setLoading(false);
    //     });
    // }, [])

    const axiosSecure = useAxiosSecure();

    const { data: camp = [], isPending: loading, refetch } = useQuery({
        queryKey: ['camp'],
        queryFn: async () => {
            const res = await axiosSecure.get('/camp');
            return res.data; 
        },
    });




return [camp, loading, refetch ]

};

export default useCamp;

