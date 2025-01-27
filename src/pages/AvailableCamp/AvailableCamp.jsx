import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AvailableCamp = () => {
  const [layout, setLayout] = useState("grid-cols-3");
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("alphabetical");
  const [camps, setCamps] = useState([]);
  
  

  useEffect(() => {
    fetch(`https://medical-camp-server-iota.vercel.app/camp?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setCamps(data);
      });
  }, [search]);

  console.log(camps)
 
  const handleLayoutToggle = () => {
    setLayout(layout === "grid-cols-3" ? "grid-cols-2" : "grid-cols-3");
  };

  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  
  const filteredCamps = camps
    .filter((camp) =>
      camp.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "alphabetical") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "mostRegistered") {
        return b.participants - a.participants;
      } else if (sortOption === "fees") {
        return a.fees - b.fees;
      } else {
        return 0;
      }
    });

  return (
    <div>
      <Helmet>
        <title>MCMS | Available Camp</title>
      </Helmet>

      <div className="container mx-auto p-4">
        {/* Search, Sort, and Layout Toggle */}
        <div className="flex flex-col lg:flex-row gap-3 justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search camps..."
            className="border p-2 rounded w-full max-w-sm mr-4"
            value={search}
            onChange={handleSearch}
          />
          <select
            className="border p-2 rounded"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="alphabetical">Alphabetical Order</option>
            <option value="mostRegistered">Most Registered</option>
            <option value="fees">Camp Fees</option>
          </select>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded ml-4"
            onClick={handleLayoutToggle}
          >
            Change Layout
          </button>
        </div>

        {/* Camp Cards */}
        <div className={`grid gap-4 ${layout}`}>
          {filteredCamps.map((camp) => (
            <div key={camp._id} className="bg-white shadow rounded p-4">
              <img
                referrerPolicy='no-referrer'
                src={camp?.image}
                alt={camp.name}
                className="w-full h-48 object-cover rounded hover:scale-95 transition"
              />
              <h3 className="text-xl font-bold mt-2">{camp.name}</h3>
              <p className="text-gray-600"> <strong>Fees: {camp.campFees}</strong></p>
              <p className="text-gray-600 mt-1">
                <strong>Date & Time:</strong> {camp.dateTime}
              </p>
              <p className="text-gray-600">
                <strong>Location:</strong> {camp.location}
              </p>
              <p className="text-gray-600">
                <strong>Healthcare Professional:</strong> {camp.professional}
              </p>
              <p className="text-gray-600">
                <strong>Participants:</strong> {camp.participants}
              </p>
              <p className="text-gray-600 mt-2">{camp.description}</p>
              <Link to={`/campdetails/${camp._id}`}>
              <button
                className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Details
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableCamp;
