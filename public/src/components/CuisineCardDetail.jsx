import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../config/axiosInstance";

export default function CuisineCardDetail() {
  const navigation = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cuisine, setCuisine] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios({
          method: "GET",
          url: `/pub/cuisines/${id}`,
        });
        console.log(data);
        setCuisine(data.data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <p className="text-center font-bold">Loading...</p>;
  }
  return (
    <>
      <div className="container">
        <main className="pt-12">
          <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100 py-12">
            <div id="cuisine" className="flex shadow-2xl w-3/4 h-4/5 border divide-x rounded-lg overflow-hidden bg-white">
              <div id="image" className="h-full w-1/2">
                <img className="object-cover h-full w-full" src={cuisine.imageUrl} alt="" />
              </div>
              <div id="details" className="flex flex-col justify-between h-full w-1/2 text-center p-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">{cuisine.name}</h2>
                  <p className="text-xl px-4 py-2 bg-blue-100 rounded-full inline-block mb-12">Category: {cuisine.category}</p>
                  <p className="text-2xl font-semibold mb-6">{cuisine.description}</p>
                </div>
                <p className="text-2xl font-medium">Rp. {cuisine.price}</p>
              </div>
            </div>
            <br />
            <div id="back" className="mt-8">
              <button
                onClick={(e) => {
                  e.preventDefault;
                  navigation("/");
                }}
                className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-300"
              >
                Back
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
