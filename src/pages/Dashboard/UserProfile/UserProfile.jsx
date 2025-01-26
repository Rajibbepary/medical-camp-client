import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";



const UserProfile = () => {
     const { user } = useContext(AuthContext)
    
      const [profile, setProfile] = useState(user);
        
          const [isEditing, setIsEditing] = useState(false);
          const [editData, setEditData] = useState(profile);
        
         
          const handleInputChange = (e) => {
            const { name,  defaultValue } = e.target;
            setEditData((prev) => ({ ...prev, [name]:  defaultValue }));
          };
        
         
          const handleFormSubmit = (e) => {
            e.preventDefault();
            setProfile(editData); 
            setIsEditing(false); 
          };
    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
        {!isEditing ? (
          <div>
            <img
              src={profile?.photoURL}
              alt="Profile"
              className="w-14 h-14 rounded-full mx-auto border-2 border-green-600"
            />
            <h2 className="text-2xl font-semibold text-center mt-4">
              {profile?.displayName}
            </h2>
            <p className="text-center text-gray-600 mt-2">{profile.email}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Update
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-4 bg-gray-100 p-4 rounded"
          >
            <label className="block">
              <span className="text-gray-700">Name:</span>
              <input
                type="text"
                name="name"
                defaultValue={editData.displayName}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border rounded"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Image URL:</span>
              <input
                type="text"
                name="image"
                defaultValue={editData.photoURL}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border rounded"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Contact:</span>
              <input
                type="email"
                name="contact"
                defaultValue={editData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border rounded"
              />
            </label>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    );
};

export default UserProfile;
