import { useEffect, useState } from "react";
import axios from "../config/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";

export default function UploadImage() {
  const [isLoading, setIsLoading] = useState(true);
  const [imgUrl, setImgUrl] = useState("");
  const [file, setFile] = useState();
  const navigation = useNavigate();
  const { cuisineId } = useParams();
  async function fetchData() {
    try {
      const { data } = await axios({
        method: "GET",
        url: `/cuisines/${cuisineId}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setImgUrl(data.data.imgUrl);
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

  async function handlerForm(e) {
    try {
      setIsLoading(true);
      e.preventDefault();
      const bodyForm = new FormData();
      bodyForm.append("image", file);

      const response = await axios({
        method: "PATCH",
        url: `/cuisines/${cuisineId}`,
        data: bodyForm,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.info(`${response.data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
      navigation(`/cuisines/${cuisineId}/patch}`);
    } finally {
      setIsLoading(true);
    }
  }
  if (isLoading) {
    return (
      <>
        <div className="p4 sm:ml-64">
          <div className="p2 border-2 border-gray-200 min-h-screen flex justify-center items-center">
            <p className="text-lg font-bold text-center">Loading... </p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-2 border-2 border-gray-200 rounded-lg mt-14">
          <div className="w-full flex flex-col gap-4 mb-4">
            <div className="border shadow-md min-h-24 p-4">
              <p className="text-lg text-center font-semibold">Current image:</p>
              <img src={imgUrl} alt="" className="object-cover max-w-72 max-h-72 self-center" />
            </div>
            <div className="border p-4">
              <p className="text-lg text-center font-semibold">Update image:</p>
              <input onChange={(e) => setFile(e.target.files[0])} type="file" className="file-input file-input-bordered w-full my-4" />
              <div className="flex w-full justify-end">
                <Button buttonHandler={handlerForm} buttonText={"Upload Image"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
