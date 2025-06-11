import { useState } from 'react';
import axios from 'axios';

const LoginSignup = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    pwd: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/add', data);
      alert("okay");
      console.log(response);
    } catch (err) {
      console.log("error", err);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col justify-center items-center w-[500px] h-[400px] space-y-4">
          <div className="flex flex-col w-full m-2">
            <label className="mr-2 font-semibold">Name</label>
            <input
              value={data.name}
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div className="flex flex-col w-full m-2">
            <label className="mr-2 font-semibold">Email</label>
            <input
              value={data.email}
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div className="flex flex-col w-full m-2">
            <label className="mr-2 font-semibold">Password</label>
            <input
              value={data.pwd}
              name="pwd"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;