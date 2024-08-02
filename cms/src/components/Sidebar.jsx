import { Link } from "react-router-dom";

export default function Sidebar() {
  function handlerProfile(e) {
    e.preventDefault();
  }

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <Link to={"/"} className="flex items-center space-x-3">
                <img className="max-w-10 self-center" src="./assets/images/food-svgrepo-com.svg" alt="" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">Restaurant</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 " aria-label="Sidebar">
        <div className="flex flex-col h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="flex flex-col items-between space-y-2 font-medium">
            {/* <li> */}
            {/* <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <svg className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </a> */}
            {/* </li> */}
            <li>
              <Link to={"/"} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 470 470"
                  xmlSpace="preserve"
                  fill="#000000"
                  stroke="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path style={{ fill: "#ffffff" }} d="M100,184.782V442.5c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V184.782H100z" />
                      <path style={{ fill: "#ffffff" }} d="M255,183.328V442.5c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V183.328H255z" />
                      <path style={{ fill: "#ffffff" }} d="M120,7.5v200c41.42,0,75-33.58,75-75S175.85,7.5,120,7.5z" />
                      <path style={{ fill: "#ffffff" }} d="M295,117.5l-20,90c27.61,0,50-22.39,50-50v-40H295z" />
                      <path style={{ fill: "#ffffff" }} d="M120,7.5c33.51,0,45,83.58,45,125s-20.15,75-45,75c-41.42,0-75-33.58-75-75S64.15,7.5,120,7.5z"></path>
                      <path style={{ fill: "#ffffff" }} d="M295,117.5v40c0,27.61-8.95,50-20,50c-27.61,0-50-22.39-50-50v-40H295z"></path>
                      <path style={{ fill: "#ffffff" }} d="M385,217.5v225c0,11.05,8.95,20,20,20s20-8.95,20-20v-225H385z" />
                      <path style={{ fill: "#ffffff" }} d="M390,7.5c-5.36,0-10.45,1.21-15,3.37l20,236.63h30v-205C425,23.17,409.33,7.5,390,7.5z" />
                      <path style={{ fill: "#ffffff" }} d="M395,42.5v205h-10c-16.5,0-30-13.5-30-30v-175c0-13.96,8.18-26.01,20-31.63 C386.82,16.49,395,28.54,395,42.5z"></path>
                      <path d="M120,0C57.666,0,37.5,89.269,37.5,132.5c0,35.042,22.345,66.24,55,77.782V442.5c0,15.164,12.336,27.5,27.5,27.5 s27.5-12.336,27.5-27.5V210.282c32.655-11.542,55-42.74,55-77.782C202.5,89.269,182.334,0,120,0z M138.004,197.553 c-3.252,0.898-5.504,3.856-5.504,7.229V442.5c0,6.893-5.607,12.5-12.5,12.5s-12.5-5.607-12.5-12.5V204.782 c0-3.374-2.252-6.332-5.504-7.229C72.854,189.506,52.5,162.755,52.5,132.5C52.5,95.69,69.497,15,120,15s67.5,80.69,67.5,117.5 C187.5,162.755,167.146,189.506,138.004,197.553z"></path>
                      <path d="M325,0c-4.142,0-7.5,3.358-7.5,7.5V110h-18.333V7.5c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5V110h-18.333V7.5 c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5V110H232.5V7.5c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v150 c0,21.176,11.625,40.49,30,50.498V442.5c0,15.164,12.336,27.5,27.5,27.5s27.5-12.336,27.5-27.5V207.998 c18.375-10.008,30-29.322,30-50.498V7.5C332.5,3.358,329.142,0,325,0z M291.997,196.455c-2.731,1.194-4.497,3.892-4.497,6.873 V442.5c0,6.893-5.607,12.5-12.5,12.5s-12.5-5.607-12.5-12.5V203.328c0-2.981-1.765-5.679-4.497-6.873 c-15.493-6.771-25.503-22.062-25.503-38.955V125h85v32.5C317.5,174.393,307.489,189.684,291.997,196.455z"></path>
                      <path d="M390,0c-23.435,0-42.5,19.065-42.5,42.5v175c0,18.109,12.905,33.262,30,36.747V442.5c0,15.164,12.336,27.5,27.5,27.5 s27.5-12.336,27.5-27.5v-400C432.5,19.065,413.435,0,390,0z M417.5,442.5c0,6.893-5.607,12.5-12.5,12.5s-12.5-5.607-12.5-12.5V255 h2.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-10c-12.407,0-22.5-10.093-22.5-22.5v-175c0-15.164,12.336-27.5,27.5-27.5 s27.5,12.336,27.5,27.5V442.5z"></path>
                      <circle cx={90} cy="117.5" r="7.5" />
                      <circle cx={120} cy="147.5" r="7.5" />
                    </g>
                  </g>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Cuisines</span>
              </Link>
            </li>
            <li>
              <Link to={"/cuisines/add"}>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H12.75L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H11.25L11.25 9C11.25 8.58579 11.5858 8.25 12 8.25Z"
                        fill="#1C274C"
                      />
                    </g>
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Add Cuisine</span>
                </a>
              </Link>
            </li>
            {/* <li>
              <Link to={"/cuisines/"} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75" viewBox=" 0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier">
                    <title />
                    <g id="Complete">
                      <g id="edit">
                        <g>
                          <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                          <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Edit Cuisine</span>
              </Link>
            </li> */}
            {/* <li>
              <Link to={""} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="upload-alt-2" className="icon glyph flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900">
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier">
                    <path d="M15.73,14.34l-3-3.05A1.05,1.05,0,0,0,12,11a1,1,0,0,0-.71.29L8.09,14.48a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l1.5-1.5v6.79a1,1,0,0,0,2,0V14.44l1.31,1.31a1,1,0,0,0,1.42,0A1,1,0,0,0,15.73,14.34Z"></path>
                    <path d="M22,12a5,5,0,0,1-5,5H15.42a2,2,0,0,0,1-.54,2,2,0,0,0,0-2.83l-3.05-3a2,2,0,0,0-2.83,0L7.38,13.77a2,2,0,0,0,0,2.83l.17.14a7.5,7.5,0,1,1,9-9.7c.14,0,.28,0,.42,0A5,5,0,0,1,22,12Z"></path>
                  </g>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Upload Image</span>
              </Link>
            </li> */}
            <li>
              <Link to={"/categories"} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Categories</span>
                {/* <spanx
        class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full">Pro</spanx> */}
              </Link>
            </li>
            <li>
              <Link to={"/add-staff"} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Add Staff</span>
                <spanx class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full">Admin Only</spanx>
              </Link>
            </li>
          </ul>
          <div className="h-full content-end pb-4">
            <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group font-medium">
              <span className="flex-1 ms-3 whitespace-nowrap">Privileges: Staff|Admin</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
