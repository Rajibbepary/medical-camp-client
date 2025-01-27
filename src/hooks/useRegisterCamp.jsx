import { useEffect, useState } from "react";



const useRegisterCamp = () => {
const [joincamp, setJoincamp] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://medical-camp-server-q8vfu0j8x-rajib21s-projects.vercel.app/joincamps')
        .then(res => res.json())
        .then(data => {
            setJoincamp(data);
            setLoading(false);
        });
    }, [])

    return [joincamp, loading]
       
    
};

export default useRegisterCamp;