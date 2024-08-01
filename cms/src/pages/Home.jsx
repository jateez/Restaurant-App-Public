import { useEffect, useState } from "react";
import axios from "../config/axiosInstance";

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
    return <p className="text-center font-bold">Loading...</p>;
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
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {cuisines.map((cuisine, index) => {
                    return (
                      <>
                        <tr className="hover">
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
                              console.log(cuisine.categoryId);
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
