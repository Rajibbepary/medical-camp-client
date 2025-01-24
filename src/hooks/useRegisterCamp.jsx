import { useEffect, useState } from "react";



const useRegisterCamp = () => {
const [joincamp, setJoincamp] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/joincamps')
        .then(res => res.json())
        .then(data => {
            setJoincamp(data);
            setLoading(false);
        });
    }, [])

    return [joincamp, loading]
       
    
};

export default useRegisterCamp;