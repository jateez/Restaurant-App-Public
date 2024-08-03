import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../config/axiosInstance";
import { toast } from "react-toastify";

export default function CuisineCardDetail({}) {
  const [isLoading, setIsLoading] = useState(false);
  const [cuisine, setCuisine] = useState({});
  const { id } = useParams();
  async function fetchData() {
    try {
      setIsLoading(true);
      const cuisine = (
        await axios({
          method: "GET",
          url: `/pub/cuisines/${id}`,
        })
      ).data.data;

      setCuisine(cuisine);
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
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handlerCategory(category) {
    switch (category) {
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
  }

  if (isLoading) {
    <div className="flex justify-center items-center h-screen">
      <span className="loading loading-spinner loading-lg"></span>
    </div>;
  }
  return (
    <>
      <div className="container">
        <main className="pt-12">
          <div className="min-h-screen bg-base-200 pt-32 px-4 sm:px-6 lg:px-8 flex-wrap items-center">
            <div className="max-w-4xl mx-auto bg-base-100 rounded-box shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img className="h-48 w-full object-cover md:h-full md:w-48" src={cuisine.imgUrl} alt={cuisine.name} />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-primary font-semibold">{handlerCategory(cuisine.categoryId)}</div>
                  <h1 className="mt-1 text-4xl font-extrabold text-neutral">{cuisine.name}</h1>
                  <p className="mt-10 text-black-content ">{cuisine.description}</p>
                  <div className="mt-4">
                    <span className="text-2xl font-bold text-primary">Rp. {cuisine.price}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link to={"/"} className="btn btn-primary">
                Back to Home
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
