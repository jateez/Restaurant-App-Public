import { useState } from "react";
import axios from "../config/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function AddStaff() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  async function handlerForm(e) {
    try {
      e.preventDefault();
      // const { data } = await axios({
      //   method: "post",
      //   url: "/add-user",
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      //   },
      //   data: {
      //     email,
      //     password,
      //   },
      // });
      console.log("hello");
      console.log("HELo");
      navigation("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14">
          <h1 className="text-center font-bold text-2xl">Add User</h1>
          <form className="w-full">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded min-h-12 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-first-name"
                  type="email"
                  placeholder=""
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                  Password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded min-h-12 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="password"
                  placeholder=""
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-3 flex justify-end">
                <button onClick={handlerForm} className="shadow bg-indigo-800 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                  {"Add User"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
