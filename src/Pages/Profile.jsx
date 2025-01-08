import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../context/Context'; // Make sure the import is correct
import { toast } from "react-toastify";
const Profile = () => {
    const { backendUrl, navigate } = useContext(Context); 
    const [user, setUser] = useState(null);
    console.log(backendUrl)
    useEffect(() => {
      const token = localStorage.getItem("token")
      if (!token) {
        navigate('/'); // Redirect to login if no token is found
      } else {
        const fetchUserData = async () => {
                try {
                  const response = await axios.get(backendUrl + "/api/user/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                  });
              
                  if (response.data.success) {
                    setUser(response.data); // Update user state
                  } else {
                    navigate('/'); // Redirect to login if user fetch fails
                  }
                } catch (error) {
                  console.error("Error fetching user data:", error);
                  navigate('/'); // Redirect to login on error
                }
              };
              
        fetchUserData();
      }
    }, [navigate, backendUrl]);
  
    if (!user) return <div>Loading...</div>;
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="User"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-700">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate('/');
              toast.error("Logout successfully")
            }}
            className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
    );
  };
export default Profile;  