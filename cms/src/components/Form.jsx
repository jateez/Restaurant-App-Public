import { useEffect, useState } from "react";
import axios from "../config/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";

export default function Form() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const navigation = useNavigate();
  const { cuisineId } = useParams();
  if (cuisineId) {
    async function fetchData() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `/cuisines/${cuisineId}`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        setName(data.data.name);
        setPrice(data.data.price);
        setImgUrl(data.data.imgUrl);
        setCategory(data.data.categoryId);
        setDescription(data.data.description);
        setCategories(
          (
            await axios({
              method: "GET",
              url: "/categories",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              },
            })
          ).data.data
        );
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      fetchData();
    }, []);

    async function handlerForm(e) {
      try {
        e.preventDefault();
        await axios({
          method: "PUT",
          url: `/cuisines/${cuisineId}`,
          data: {
            name,
            description,
            price,
            imgUrl,
            categoryId: category,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        navigation("/");
      } catch (error) {
        console.log(error);
      }
    }
    return (
      <>
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14">
            <form className="w-full">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Cuisine Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="name"
                    type="text"
                    placeholder=""
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                    Price
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="price"
                    name="price"
                    type="number"
                    placeholder=""
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  />
                  <p className="text-gray-600 text-xs italic">Price is in rupiah. value must equal or higher than 1000</p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                    Image URL
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="imgUrl"
                    name="imgUrl"
                    type="text"
                    placeholder=""
                    onChange={(e) => setImgUrl(e.target.value)}
                    value={imgUrl}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="category"
                      name="category"
                      defaultValue={""}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option disabled value={"Choose Category"}>
                        Choose Category
                      </option>
                      {categories.map((cat) => {
                        if (category === cat.id) {
                          return (
                            <option selected value={cat.id}>
                              {cat.name}
                            </option>
                          );
                        }
                        return <option value={cat.id}>{cat.name}</option>;
                      })}
                      <option disabled value={"Choose Category"}>
                        Choose Category
                      </option>
                      categories.map
                      <option value="1">Main Course</option>
                      <option value="2">Appetizers</option>
                      <option value="3">Desserts</option>
                      <option value="4">Beverages</option>
                      <option value="5">Snacks</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Description
                  </label>
                  <input
                    className="appearance-none text-start items-start content-start min-h-[20rem] block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="description"
                    name="description"
                    type="textarea"
                    placeholder=""
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-3 flex justify-end">
                  <button onClick={handlerForm} className="shadow bg-indigo-800 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                    Add Cuisine
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  } else {
    async function handlerForm(e) {
      try {
        e.preventDefault();
        await axios({
          method: "POST",
          url: "/cuisines",
          data: {
            name,
            description,
            price,
            imgUrl,
            categoryId: category,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        navigation("/");
      } catch (error) {
        console.log(error);
      }
    }
    return (
      <>
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14">
            <form className="w-full">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Cuisine Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="name"
                    type="text"
                    placeholder=""
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                    Price
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="price"
                    name="price"
                    type="number"
                    placeholder=""
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <p className="text-gray-600 text-xs italic">Price is in rupiah. value must equal or higher than 1000</p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                    Image URL
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="imgUrl"
                    name="imgUrl"
                    type="text"
                    placeholder=""
                    onChange={(e) => setImgUrl(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="category"
                      name="category"
                      defaultValue={"Choose Category"}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option disabled value={"Choose Category"}>
                        Choose Category
                      </option>
                      <option value="1">Main Course</option>
                      <option value="2">Appetizers</option>
                      <option value="3">Desserts</option>
                      <option value="4">Beverages</option>
                      <option value="5">Snacks</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Description
                  </label>
                  <input
                    className="appearance-none min-h-[20rem] block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="description"
                    name="description"
                    type="textarea"
                    placeholder=""
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-3 flex justify-end">
                  <button onClick={handlerForm} className="shadow bg-indigo-800 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                    Add Cuisine
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
