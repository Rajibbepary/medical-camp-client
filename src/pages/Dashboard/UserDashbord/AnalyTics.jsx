import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#00EE07'];


const AnalyTics = () => {

const axiosSecure = useAxiosSecure();

    const{ data: stats=[]} = useQuery({
        queryKey:['admin-stats'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/admin-status')
            return res.data;
        }
    })


    const{ data: chartData=[]} = useQuery({
      queryKey:['payment-stats'],
      queryFn: async() =>{
          const res = await axiosSecure.get('/payment-stats')
          return res.data;
      }
  })


    const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };
    
    const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;
    
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // custom shape for the pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return {name: data.displayName, value: data.fees}
    })



    return (
        <div>
           <div className="stats stats-vertical lg:stats-horizontal shadow mb-10">
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

      <div className="flex flex-col lg:flex-row  gap-4">
        <div className="w-1/2">
        <PieChart width={300} height={300}>
                        <Pie
                            data={pieChartData }
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            { pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
        </div>
        <div className="w-1/2">
        <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="displayName" />
      <YAxis />
      <Bar dataKey="fees" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
        </div>
      </div>
        </div>
   );
};

export default AnalyTics;