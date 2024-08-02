import { useEffect, useState } from "react";
import instance from "../config/axiosInstance";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  async function fetchData() {
    try {
      setIsLoading(true);
      const { data } = await instance({
        method: "get",
        url: "/categories",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      setCategories(data.data);
    } catch (error) {
      console.log(error);
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
        <div className="p-2 border-2 border-gray-200 min-h-screen flex items-start mt-16">
          <table className="table flex w-full min-h-24 rounded bg-gray-50">
            <thead className="bg-gray-100 hover:bg-gray-300 uppercase">
              <tr className="hover">
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Name</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => {
                return (
                  <>
                    <tr className="hover" key={category.id}>
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">{category.name}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
