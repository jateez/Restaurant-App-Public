import { useState } from "react";
import axios from "../config/axiosInstance";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handlerLogin(e) {
    const navigation = useNavigate();
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: "/login",
        data: {
          email,
          password,
        },
      });

      localStorage.setItem("access_token", data.access_token);

      if (localStorage.getItem("access_token")) {
        navigation("");
      }
    } catch (error) {
      console.log(error, "ERROR");
    }
  }
  return (
    <>
      <div className="container">
        <main className="bg-gray-100 h-screen w-screen">
          <div className="h-full w-full flex flex-col justify-center items-center">
            <div id="cuisine" className="flex shadow-2xl w-1/2 h-5/6 border divide-x rounded-lg overflow-hidden bg-white justify-center">
              <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                  <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" action="#" method="POST">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required=""
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                          Password
                        </label>
                        {/* <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div> */}
                      </div>
                      <div className="mt-2">
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required=""
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={handlerLogin}
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                  <div className="flex flex-col mt-10 text-center test-sm text-gray-500 divide-y divide-gray-400 space-y-2">
                    <p className="text-center text-sm text-gray-500">
                      Does not have staff account?
                      <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        {" Register here"}
                      </a>
                    </p>
                    <p className="text-center text-sm text-gray-500">
                      Not the website you are looking for?
                      <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        {" Click here"}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
