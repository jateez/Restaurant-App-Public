import { useEffect, useState } from "react";
import CuisineCard from "../components/CuisineCard";
import axios from "../config/axiosInstance";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  async function fetchData(page = 1) {
    try {
      setIsLoading(true);
      let queryParams = [];
      if (filter) {
        queryParams.push(`filter=${filter}`);
      }
      if (sort) {
        queryParams.push(`sort=${sort}`);
      }
      if (page) {
        queryParams.push(`page=${page}`);
      }
      if (search) {
        queryParams.push(`search=${search}`);
      }
      let strQueryParams = queryParams.join("&");
      const { data } = await axios({
        method: "GET",
        url: `/pub/cuisines?${strQueryParams}`,
      });
      setPageNumber(data.pageNumber);
      setTotalPage(data.totalPage);
      setCuisines(data.data);
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

  async function fetchCategories() {
    try {
      setIsLoading(true);
      const categories = (
        await axios({
          method: "GET",
          url: `/pub/categories`,
        })
      ).data.data;
      setCategories(categories);
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

  function handlerSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function handlerSearchSubmit(e) {
    e.preventDefault();
    fetchData(1);
  }
  function goToNextPage(e) {
    e.preventDefault();
    if (pageNumber < totalPage) {
      setPageNumber((prev) => prev + 1);
    }
  }

  function goToPreviousPage(e) {
    e.preventDefault();
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  }

  function goToPage(e, page) {
    e.preventDefault();
    if (page >= 1 && page <= totalPage) {
      setPageNumber(page);
    }
  }

  function getPageNumbers() {
    const pageNumbers = [];
    const leftSiblingCount = 1;
    const rightSiblingCount = 1;

    pageNumbers.push(1);

    const startPage = Math.max(2, pageNumber - leftSiblingCount);
    const endPage = Math.min(totalPage - 1, pageNumber + rightSiblingCount);

    if (startPage > 2) {
      pageNumbers.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPage - 1) {
      pageNumbers.push("...");
    }

    if (totalPage !== 1) {
      pageNumbers.push(totalPage);
    }

    return pageNumbers;
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchData(1);
    setPageNumber(1);
  }, [filter, sort]);

  useEffect(() => {
    if (pageNumber > 1) {
      fetchData(pageNumber);
    }
  }, [pageNumber]);
  if (isLoading) {
    return (
      <>
        <div className="container">
          <main className="my-12">
            <div className="hero min-h-screen" style={{ backgroundImage: "url('https://picsum.photos/1600/900')" }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Welcome to Restaurant App</h1>
                  <p className="mb-5">Discover delicious cuisines from around the world.</p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4 py-12">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div className="w-full">
                  <form onSubmit={handlerSearchSubmit} className="join w-full">
                    <input onChange={handlerSearch} type="text" value={search} placeholder="Search cuisines..." className="input input-bordered join-item flex-grow" />
                    <button type="submit" className="btn btn-primary join-item">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </form>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <select className="select select-primary w-full sm:w-auto" onChange={(e) => setFilter(e.target.value)} defaultValue={filter}>
                    <option disabled value="">
                      Filter by Category
                    </option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <select className="select select-primary w-full sm:w-auto" defaultValue={sort} onChange={(e) => setSort(e.target.value)}>
                    <option disabled value="">
                      Sort by
                    </option>
                    <option value="ASC">Price: Low to High</option>
                    <option value="DESC">Price: High to Low</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex justify-center items-center h-screen">
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <div className="join">
                  <button className="join-item btn" onClick={goToPreviousPage} disabled={pageNumber === 1}>
                    «
                  </button>
                  {getPageNumbers().map((page, index) =>
                    page === "..." ? (
                      <span key={index} className="join-item btn btn-disabled">
                        ...
                      </span>
                    ) : (
                      <button key={index} className={`join-item btn ${pageNumber === page ? "btn-active" : ""}`} onClick={(e) => goToPage(e, page)}>
                        {page}
                      </button>
                    )
                  )}
                  <button className="join-item btn" onClick={goToNextPage} disabled={pageNumber === totalPage}>
                    »
                  </button>
                </div>
              </div>
            </div>
          </main>
          <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div>
              <div className="grid grid-flow-col gap-4">
                <Link>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </Link>
                <Link>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </Link>
                <Link>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <p>Copyright © 2024 - All right reserved by Restaurant App</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container">
        <main className="my-12">
          <div className="hero min-h-screen" style={{ backgroundImage: "url('https://picsum.photos/1600/900')" }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome to Restaurant App</h1>
                <p className="mb-5">Discover delicious cuisines from around the world.</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div className="w-full">
                <form onSubmit={handlerSearchSubmit} className="join w-full">
                  <input onChange={handlerSearch} type="text" value={search} placeholder="Search cuisines..." className="input input-bordered join-item flex-grow" />
                  <button type="submit" className="btn btn-primary join-item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </form>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <select className="select select-primary w-full sm:w-auto" onChange={(e) => setFilter(e.target.value)} defaultValue={filter}>
                  <option disabled value="">
                    Filter by Category
                  </option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <select className="select select-primary w-full sm:w-auto" defaultValue={sort} onChange={(e) => setSort(e.target.value)}>
                  <option disabled value="">
                    Sort by
                  </option>
                  <option value="ASC">Price: Low to High</option>
                  <option value="DESC">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cuisines.map((cuisine) => (
                <CuisineCard key={cuisine.id} name={cuisine.name} description={cuisine.description} id={cuisine.id} category={handlerCategory(cuisine.categoryId)} imgUrl={cuisine.imgUrl} />
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <div className="join">
                <button className="join-item btn" onClick={goToPreviousPage} disabled={pageNumber === 1}>
                  «
                </button>
                {getPageNumbers().map((page, index) =>
                  page === "..." ? (
                    <span key={index} className="join-item btn btn-disabled">
                      ...
                    </span>
                  ) : (
                    <button key={index} className={`join-item btn ${pageNumber === page ? "btn-active" : ""}`} onClick={(e) => goToPage(e, page)}>
                      {page}
                    </button>
                  )
                )}
                <button className="join-item btn" onClick={goToNextPage} disabled={pageNumber === totalPage}>
                  »
                </button>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
          <div>
            <div className="grid grid-flow-col gap-4">
              <Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </Link>
              <Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </Link>
              <Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <p>Copyright © 2024 - All right reserved by Restaurant App</p>
          </div>
        </footer>
      </div>
    </>
  );
}
