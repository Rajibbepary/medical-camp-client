

const CampCard = ({ camp, onJoin }) => {

    return (

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src={camp.image} alt={camp.name} className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-2xl font-bold mt-4">{camp.name}</h2>
              <p className="text-gray-700">💰 Fees: {camp.fees}</p>
              <p className="text-gray-700">📅 Date: {camp.date}</p>
              <p className="text-gray-700">🕒 Time: {camp.time}</p>
              <p className="text-gray-700">📍 Location: {camp.location}</p>
              <p className="text-gray-700">👨‍⚕️ Doctor: {camp.doctor}</p>
              <p className="text-gray-700">👥 Participants: {camp.participants}</p>
              <button
                onClick={() => onJoin(camp.id)}
                className="bg-green-500 text-white mt-4 py-2 px-4 rounded hover:bg-green-600"
              >
                Join Now
              </button>
            </div>
    );
};

export default CampCard;