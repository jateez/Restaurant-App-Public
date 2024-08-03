import { useState } from "react";
import axios from "../config/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  async function handlerLogin(e) {
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
      navigation("/");
    } catch (error) {
      toast.error(`${error.response.data.errors[0]}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
                  <div className="mx-auto h-10 w-auto flex items-center justify-center">
                    <svg fill="#000000" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xmlSpace="preserve">
                      <g>
                        <path
                          d="M18.35,20.805c0.195,0.195,0.451,0.293,0.707,0.293c0.256,0,0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414
		c-1.015-1.016-1.015-2.668,0-3.684c0.87-0.87,1.35-2.026,1.35-3.256s-0.479-2.386-1.35-3.256c-0.391-0.391-1.023-0.391-1.414,0
		s-0.391,1.023,0,1.414c0.492,0.492,0.764,1.146,0.764,1.842s-0.271,1.35-0.764,1.842C16.555,16.088,16.555,19.01,18.35,20.805z"
                        />
                        <path
                          d="M40.35,20.805c0.195,0.195,0.451,0.293,0.707,0.293c0.256,0,0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414
		c-1.015-1.016-1.015-2.668,0-3.684c0.87-0.87,1.35-2.026,1.35-3.256s-0.479-2.386-1.35-3.256c-0.391-0.391-1.023-0.391-1.414,0
		s-0.391,1.023,0,1.414c0.492,0.492,0.764,1.146,0.764,1.842s-0.271,1.35-0.764,1.842C38.555,16.088,38.555,19.01,40.35,20.805z"
                        />
                        <path
                          d="M29.35,14.805c0.195,0.195,0.451,0.293,0.707,0.293c0.256,0,0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414
		c-1.015-1.016-1.015-2.668,0-3.684c0.87-0.87,1.35-2.026,1.35-3.256s-0.479-2.386-1.35-3.256c-0.391-0.391-1.023-0.391-1.414,0
		s-0.391,1.023,0,1.414c0.492,0.492,0.764,1.146,0.764,1.842s-0.271,1.35-0.764,1.842C27.555,10.088,27.555,13.01,29.35,14.805z"
                        />
                        <path
                          d="M55.624,43.721C53.812,33.08,45.517,24.625,34.957,22.577c0.017-0.16,0.043-0.321,0.043-0.48c0-2.757-2.243-5-5-5
		s-5,2.243-5,5c0,0.159,0.025,0.32,0.043,0.48C14.483,24.625,6.188,33.08,4.376,43.721C2.286,44.904,0,46.645,0,48.598
		c0,5.085,15.512,8.5,30,8.5s30-3.415,30-8.5C60,46.645,57.714,44.904,55.624,43.721z M27.006,22.27
		C27.002,22.212,27,22.154,27,22.098c0-1.654,1.346-3,3-3s3,1.346,3,3c0,0.057-0.002,0.114-0.006,0.172
		c-0.047-0.005-0.094-0.007-0.14-0.012c-0.344-0.038-0.69-0.065-1.038-0.089c-0.128-0.009-0.255-0.022-0.383-0.029
		c-0.474-0.026-0.951-0.041-1.432-0.041s-0.958,0.015-1.432,0.041c-0.128,0.007-0.255,0.02-0.383,0.029
		c-0.348,0.024-0.694,0.052-1.038,0.089C27.1,22.263,27.053,22.264,27.006,22.27z M25.126,26.635
		c1.582-0.356,3.217-0.537,4.86-0.537c0.004,0,0.009,0,0.014,0c0.552,0,1,0.448,1,1.001c0,0.552-0.448,0.999-1,0.999h0
		c-0.004,0-0.009,0-0.013,0c-1.496,0-2.982,0.164-4.421,0.488c-0.074,0.017-0.148,0.024-0.221,0.024c-0.457,0-0.87-0.315-0.975-0.78
		C24.249,27.291,24.587,26.756,25.126,26.635z M19.15,28.997c0.476-0.281,1.088-0.124,1.37,0.351
		c0.282,0.476,0.125,1.089-0.351,1.37c-4.713,2.792-8.147,7.861-9.186,13.56c-0.088,0.482-0.509,0.82-0.983,0.82
		c-0.06,0-0.12-0.005-0.18-0.017c-0.543-0.099-0.904-0.619-0.805-1.163C10.158,37.658,13.947,32.08,19.15,28.997z M30,55.098
		c-17.096,0-28-4.269-28-6.5c0-0.383,0.474-1.227,2.064-2.328c-0.004,0.057-0.002,0.113-0.006,0.17C4.024,46.988,4,47.54,4,48.098
		v0.788l0.767,0.185c8.254,1.981,16.744,2.985,25.233,2.985s16.979-1.004,25.233-2.985L56,48.886v-0.788
		c0-0.558-0.024-1.109-0.058-1.658c-0.004-0.057-0.002-0.113-0.006-0.17C57.526,47.371,58,48.215,58,48.598
		C58,50.829,47.096,55.098,30,55.098z"
                        />
                      </g>
                    </svg>
                  </div>
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
                      Not the website you are looking for?
                      <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        {"Click here"}
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
