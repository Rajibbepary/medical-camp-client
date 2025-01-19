import { useState } from "react";



const Modal = ({ camp, onClose }) => {
    const [formData, setFormData] = useState({
        participantName: "",
        participantEmail: "",
        age: "",
        phone: "",
        gender: "",
        emergencyContact: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = () => {
        const payload = { ...formData, campId: camp.id };
        fetch("/api/registrations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
          .then((res) => res.json())
          .then(() => {
            alert("Successfully registered!");
            onClose();
          });
      };
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-bold mb-4">Register for {camp.name}</h2>
          <p>Fees: ${camp.fees}</p>
          <p>Location: {camp.location}</p>
          <p>Healthcare Professional: {camp.healthcareProfessional}</p>
          <input
            type="text"
            name="participantName"
            placeholder="Your Name"
            value={formData.participantName}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="email"
            name="participantEmail"
            placeholder="Your Email"
            value={formData.participantEmail}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            name="emergencyContact"
            placeholder="Emergency Contact"
            value={formData.emergencyContact}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
          />
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Submit
          </button>
          <button onClick={onClose} className="ml-4 bg-gray-300 py-2 px-4 rounded">
            Cancel
          </button>
        </div>
      </div>
    );
};

export default Modal;