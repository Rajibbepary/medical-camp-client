

//import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCamp = () => {
  

    const axiosSecure = useAxiosSecure();

    const { data: camp = [], isPending: loading, refetch } = useQuery({
        queryKey: ['camp'],
        queryFn: async () => {
            const res = await axiosSecure.get('/camp');
            return res.data; 
        },
    });




return [camp,  refetch, loading ]

};

export default useCamp;

