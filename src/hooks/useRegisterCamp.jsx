import { useEffect, useState } from "react";



const useRegisterCamp = () => {
const [joincamp, setJoincamp] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://medical-camp-server-iota.vercel.app')
        .then(res => res.json())
        .then(data => {
            setJoincamp(data);
            setLoading(false);
        });
    }, [])

    return [joincamp, loading]
       
    
};

export default useRegisterCamp;