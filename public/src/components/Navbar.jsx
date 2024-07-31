export default function Navbar() {
  return (
    <>
      <nav className="bg-[#FFFFFF] h-[10dvh] w-full fixed z-20 top-0 start-0 border-b border-gray-200 px-12 py-5 flex justify-between items-center shadow-md">
        <div id="logo" className="items-center">
          <a href="" className="flex items-center space-x-3">
            <img className="max-w-10 self-center" src="./assets/images/food-svgrepo-com.svg" alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Restaurant</span>
          </a>
        </div>
        <div className="flex">
          <ul className="font-medium flex justify-between gap-x-12">
            <li>
              <a href="">Link</a>
            </li>
            <li>
              <a href="">Link</a>
            </li>
            <li>
              <a href="">Link</a>
            </li>
            <li>
              <a href="">Link</a>
            </li>
          </ul>
        </div>
      </nav>
      ;
    </>
  );
}
