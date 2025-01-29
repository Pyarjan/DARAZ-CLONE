import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="hidden  sm:flex justify-end space-x-5 lg:px-36 sm:px-12 py-2 sm:bg-[#FE5418] w-auto text-white">
        <NavLink to="/">Save On App</NavLink>
        <NavLink to="/BecomeASeller">Become A Seller</NavLink>
        <NavLink to="/">Help & Support</NavLink>
        <NavLink to="/">Login</NavLink>
        <NavLink to="/">Sign UP</NavLink>
      </nav>

      <div className="flex items-center justify-between  lg:px-32 sm:px-10 py-2 sm:bg-[#FE5418]">
        <div className=" items-center hidden sm:block">
          <img src="../public/image/daraz logo.png" alt="" className="h-12" />
        </div>

        <div className="flex-grow mx-4">
          <div className="relative">
            <img
              src="/public/image/search-orange.png"
              alt=""
              className="h-6 mt-[.6rem] ml-3 bg-white sm:hidden absolute"
            />

            <input
              type="search"
              placeholder="Search in Daraz"
              className="w-full sm:pl-5 pl-14 py-2 pr-[5rem] sm:pr-0 border border-orange-500 sm:border-gray-300 sm:rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600 block rounded-full"
            />
            <button className="absolute top-0 right-0 h-full px-4 sm:bg-orange-300 text-white sm:rounded-r-md flex items-center justify-center">
              <img
                src="../public/image/search-white.png"
                alt=""
                className="h-6 hidden sm:block"
              />

              <button className="bg-orange-500 mr-[3rem] py-1 px-3 rounded-2xl sm:hidden absolute">
                Search
              </button>
            </button>
          </div>
        </div>

        <div className="flex items-center">
          <button className="text-gray-600">
            <img
              src="../public/image/shopping-cart-white.png hidden sm:block"
              alt=""
              className="h-8"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
