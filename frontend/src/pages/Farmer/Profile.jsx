import { useState } from "react";
import { FaUserEdit, FaSave } from "react-icons/fa";

function Profile() {

  const [profile, setProfile] = useState({
    name: "Ramesh Gowda",
    email: "ramesh@gmail.com",
    phone: "9876543210",
    village: "Chikkamagaluru",
    farm: "Green Valley Farm",
    experience: "8 Years",
    address: "Near KSRTC Bus Stand, Chikkamagaluru",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    alert("✅ Profile Updated Successfully");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        👨‍🌾 Farmer Profile
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-5xl mx-auto">

        <div className="flex flex-col items-center mb-8">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Farmer"
            className="w-36 h-36 rounded-full border-4 border-green-600"
          />

          <button className="mt-4 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
            <FaUserEdit className="inline mr-2" />
            Change Photo
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="font-semibold">Farmer Name</label>

            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
            />
          </div>

          <div>
            <label className="font-semibold">Email</label>

            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
            />
          </div>

          <div>
            <label className="font-semibold">Phone</label>

            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
            />
          </div>

          <div>
            <label className="font-semibold">Village</label>

            <input
              type="text"
              name="village"
              value={profile.village}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
            />
          </div>

          <div>
            <label className="font-semibold">Farm Name</label>

            <input
              type="text"
              name="farm"
              value={profile.farm}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
            />
          </div>

          <div>
            <label className="font-semibold">Experience</label>

            <input
              type="text"
              name="experience"
              value={profile.experience}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
            />
          </div>

        </div>

        <div className="mt-6">

          <label className="font-semibold">Address</label>

          <textarea
            rows="4"
            name="address"
            value={profile.address}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />

        </div>

        <button
          onClick={saveProfile}
          className="mt-8 bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800"
        >
          <FaSave className="inline mr-2" />
          Save Changes
        </button>

      </div>

    </div>
  );
}

export default Profile;