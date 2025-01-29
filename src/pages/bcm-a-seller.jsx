const BecomeASeller = () => {
  return (
    <>
      <header className="px-4 py-2">
        <img
          src="/public/image/daraz-seller.svg"
          alt=""
          className="h-[3.5rem]"
        />
      </header>

      {/* content */}
      <div className=" h-auto bg-[url('/public/image/background.png')] text-white  flex justify-around pt-20 px-18  gap-6 flex-wrap relative">
        <div className="w-[39rem]">
          <p className="font-bold text-[60px]">Become A Daraz Seller Today!</p>
          <p className="font-bold text-xl">
            Create a Daraz seller account now and reach millions of customers!
          </p>
          {/* <img
            src="/public/image/cart.png"
            alt="cart img"
            className="h-[15rem] top-[20rem]  hidden md:block"

          /> */}
        </div>

        <div className="w-[32rem]">
          <div className="bg-white text-black  rounded-t-3xl h-[27.8em] l p-10">
            <h1 className=" font-bold text-[#FE5418] text-xl">
              Login with Password{" "}
            </h1>
            <input
              type="text"
              placeholder="Mobile/Email"
              className=" border p-2 mt-5 rounded-md w-full focus:outline-none focus:ring-2 hover:border-orange-500  focus:ring-[#FE5418]"
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              className=" border p-2 mt-5 rounded-md w-full focus:outline-none focus:ring-2 hover:border-orange-500  focus:ring-[#FE5418]"
            />
            <button className="bg-[#FE5418] hover:bg-orange-500 w-full p-2 text-white text-xl rounded-md mt-20">
              Login
            </button>
            <div className="text-blue-500 text-right mt-5">
              <p>Reset Password</p>
              <p>Create a new account</p>
              <p>Register as Global Seller</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="p-5 font-bold text-[3rem] ">Why Sell on Daraz?</p>
        <p className="p-5 text-justify">
        Selling on Daraz offers access to a massive customer base, low startup costs, and reliable logistics support. You benefit from platform-wide marketing, secure payments, and performance analytics to grow your business. Daraz makes it easy to manage products, build your brand, and capitalize on the growing e-commerce trend in South Asia.
        </p>
      </div>

      <div className="flex p-9 mt-5 justify-around items-center flex-wrap bg-[#FE5418]">
        <p className="font-bold text-4xl text-white">
          What are you waiting for?
          <br /> Start selling with Daraz today.
        </p>
        <button className="text-white font-normal border-2  px-6 rounded-xl h-12 m-5 text-center ">
          GET STARTED
        </button>
      </div>
    </>
  );
};

export default BecomeASeller;
