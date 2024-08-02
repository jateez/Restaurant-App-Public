import { useEffect, useState } from "react";
import axios from "../config/axiosInstance";
import { Link } from "react-router-dom";

export default function Home() {
  const [cuisines, setCuisines] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  async function fetchData() {
    try {
      setIsLoading(true);
      const { data } = await axios({
        method: "get",
        url: "/cuisines",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      setCuisines(data.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="p-4 sm:ml-64">
          <div className="p-2 border-2 border-gray-200 min-h-screen flex justify-center items-center">
            <p className="text-lg font-bold text-center">Loading... </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14">
          <div className="flex flex-col gap-4 mb-4">
            <div className="overflow-x-auto">
              <table className="table flex w-full items-center justify-center min-h-24 rounded bg-gray-50">
                {/* head */}
                <thead className="bg-gray-100 hover:bg-gray-300 uppercase">
                  <tr className="hover">
                    <th className="px-6 py-3">ID</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Description</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Category</th>
                    <th className="px-6 py-3">Author</th>
                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {cuisines.map((cuisine, index) => {
                    return (
                      <>
                        <tr className="hover" key={cuisine.id}>
                          <td className="px-6 py-4">{index + 1}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                  <img src={cuisine.imgUrl} alt={cuisine.name + " image"} />
                                </div>
                              </div>
                              <div>{cuisine.name}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4">{cuisine.description}</td>
                          <td className="px-6 py-4">{cuisine.price}</td>
                          <td className="px-6 py-4">
                            {(() => {
                              switch (cuisine.categoryId) {
                                case 1:
                                  return "Main Course";
                                case 2:
                                  return "Appetizers";
                                case 3:
                                  return "Desserts";
                                case 4:
                                  return "Beverages";
                                case 5:
                                  return "Snacks";
                              }
                            })()}
                          </td>
                          <td className="px-6 py-4">{cuisine.User.username}</td>
                          <td className="px-6 py-4 flex gap-x-2">
                            <Link to={`/cuisines/${cuisine.id}/patch`} className="btn btn-sm btn-info">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFFFF3" className="size-6">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                              </svg>
                            </Link>
                            <Link to={`/cuisines/${cuisine.id}/edit`} className="btn btn-sm btn-warning">
                              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" fill="#FFFFF3">
                                <path d="M 46.574219 3.425781 C 45.625 2.476563 44.378906 2 43.132813 2 C 41.886719 2 40.640625 2.476563 39.691406 3.425781 C 39.691406 3.425781 39.621094 3.492188 39.53125 3.585938 C 39.523438 3.59375 39.511719 3.597656 39.503906 3.605469 L 4.300781 38.804688 C 4.179688 38.929688 4.089844 39.082031 4.042969 39.253906 L 2.035156 46.742188 C 1.941406 47.085938 2.039063 47.453125 2.292969 47.707031 C 2.484375 47.898438 2.738281 48 3 48 C 3.085938 48 3.171875 47.988281 3.257813 47.964844 L 10.746094 45.957031 C 10.917969 45.910156 11.070313 45.820313 11.195313 45.695313 L 46.394531 10.5 C 46.40625 10.488281 46.410156 10.472656 46.417969 10.460938 C 46.507813 10.371094 46.570313 10.308594 46.570313 10.308594 C 48.476563 8.40625 48.476563 5.324219 46.574219 3.425781 Z M 45.160156 4.839844 C 46.277344 5.957031 46.277344 7.777344 45.160156 8.894531 C 44.828125 9.222656 44.546875 9.507813 44.304688 9.75 L 40.25 5.695313 C 40.710938 5.234375 41.105469 4.839844 41.105469 4.839844 C 41.644531 4.296875 42.367188 4 43.132813 4 C 43.898438 4 44.617188 4.300781 45.160156 4.839844 Z M 5.605469 41.152344 L 8.847656 44.394531 L 4.414063 45.585938 Z"></path>
                              </svg>
                            </Link>
                            <Link to={`/cuisines/${cuisine.id}/delete`} className="btn btn-sm btn-error">
                              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30" fill="#FFFFF3">
                                <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
                              </svg>
                            </Link>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
