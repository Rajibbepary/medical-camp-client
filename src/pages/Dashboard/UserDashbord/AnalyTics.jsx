import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AnalyTics = () => {

const axiosSecure = useAxiosSecure();
    const{ data: stats=[]} = useQuery({
        queryKey:['admin-stats'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/admin-status')
            return res.data;
        }
    })


    return (
        <div>
           <div className="stats stats-vertical lg:stats-horizontal shadow">
  <div className="stat">
    <div className="stat-title">Total Camp</div>
    <div className="stat-value">{stats.camps}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>

  <div className="stat">
    <div className="stat-title">Payment</div>
    <div className="stat-value">{stats.payment}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div className="stat">
    <div className="stat-title">Registers Camp</div>
    <div className="stat-value">{stats.join}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>
        </div>
   );
};

export default AnalyTics;