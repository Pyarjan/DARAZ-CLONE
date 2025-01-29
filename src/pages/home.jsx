import Card from "../components/card";
import Foryou from "../components/card2(for you)";
import Carousel from "../components/carousel";
import Footer from "../components/footer";

const products = [
  {
    id: 1,
    price: "Rs.675",
    image: "/public/image/headphone.jpg",
    description: "P9 Wireless Bluetooth Headphones Latest with Stereo Headset",
    orgin: "Rs.1,599",
    discount: "-58%",
  },
  {
    id: 2,
    price: "Rs.1,339",
    image: "/public/image/airforce shoes.jpg",
    description: "Air Force 1 Full White Premium Sneaker for Men",
    orgin: "Rs.4,499",
    discount: "-69%",
  },
  {
    id: 3,
    price: "Rs.128",
    image: "/public/image/socks.jpg",
    description:
      "Pack Of 3 Pairs 100% Smell Proof Black/White/Grey Cotton Ankle Socks for Men and Women",
    orgin: "Rs.599",
    discount: "-79%",
  },
  {
    id: 4,
    price: "Rs.129",
    image: "/public/image/pads.jpg",
    description: "Safety Ultra Choice Sanitary Pads - 6 Pcs",
    orgin: "Rs.190",
    discount: "-32%",
  },
  {
    id: 5,
    price: "Rs.1,500",
    image: "/public/image/airbuds.png",
    description: "Tws Wireless Bluetooth Airbuds Charging Case Super Sound",
    orgin: "Rs.3,500",
    discount: "-50%",
  },
  {
    id: 6,
    price: "Rs.1,270",
    image: "/public/image/taddy.webp",
    description:
      "3ft Teddy Bear - Soft Plush Stuffed Doll for Kids & Big Doll Lovers - Perfect Birthday Gift",
    orgin: "Rs.4,099",
    discount: "31%",
  },
];

const youitems = [
  {
    id: 1,
    titles: "Hand Grip",
    image: "/public/image/hand grip.webp",
    price: "Rs.85",
    description: "Hand Grip Multicolor/ 150KG Metal Spring",
    discount: "-63%",
  },
  {
    id: 2,
    titles: "Phone  Holder",
    image: "/public/image/phone holder.webp",
    price: "Rs.199",
    description:
      "Desktop Mobile Phone Holder Mount Stand Flexible Foldable Portable",
    discount: "-60%",
  },
  {
    id: 3,
    titles: "Camera Airpord",
    image: "/public/image/camera airpod.webp",
    price: "Rs.500",
    description: "Ichhya Store Camera Airpods Case For 1/2 And 3",
    discount: "-20%",
  },
  {
    id: 4,
    titles: "Phone  Holder",
    image: "/public/image/wolf airpord.webp",
    price: "Rs.2499",
    description:
      "Asta WOLF Apex 150 Wireless Earbuds with 150 Hours Playtime, ANC + Quad Mic ENC, Sonic Charge, Phantom Mode, TurboSync, Duo Sync, IPX5 Water Resistant, Type-C Fast Charging",
    discount: "-55%",
  },
  {
    id: 5,
    titles: "Phone  Holder",
    image: "/public/image/summer shirt.webp",
    price: "Rs.1249",
    description:
      "Summer Stylish Cotrise Cotton Shirt Full Sleeves Pocket rl Shirt For Men - Multicolor Fashion Cotrise Cotton Shirt For Men",
    discount: "-38%",
  },
  {
    id: 6,
    titles: "underware Bra",
    image: "/public/image/underware.webp",
    price: "Rs.350",
    description:
      "New Maternity Nursing Underwear Gathered Anti-Sagging Pregnancy Postpartum Breastfeeding Maternity Bra",
    discount: "-59%",
  },
];

const Home = () => {
  const slides = [
    "/public/image/img01.jpg",
    "/public/image/img02.jpg",
    "/public/image/img03.jpg",
    "/public/image/img04.jpg",
    "/public/image/img05.jpg",
    "/public/image/img06.png",
    "/public/image/img07.png",
    "/public/image/img08.jpg",
  ];

  return (
    <>
      <div className="lg:px-32 sm:px-10 w-auto gap-2 flex justify-between relative">
        {/* carausel */}
        <div className="sm:w-full px-4 md:mt-0 sm:p-0 m-auto">
          <Carousel slides={slides} />
        </div>

        {/* download app */}
        <div className="bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-100 px-5 w-42 relative hidden xl:block">
          <p className="flex items-center text-orange-600 font-semibold w-auto">
            <span>
              <img
                src="/public/image/daraz fav.png"
                alt="logo"
                className=" my-2 w-9 "
              />
            </span>
            Download the App
          </p>
          <img
            src="/public/image/img 1.png"
            alt="image"
            className="w-48 relative"
          />

          <div className=" absolute top-[15%] right-[-11%] w-full ">
            <p className="text-white text-xs font-medium ">⭐4.8 Rated</p>
            <div className="m-2">
              <p className="text-white font-medium pl-5 mt-2">Download App</p>
              <p className="text-white text-sm font-medium flex gap-2 my-2 mt-2 items-center">
                <span>
                  <img
                    src="/public/image/dlvry truck.png"
                    alt=""
                    className="h-7"
                  />
                </span>
                Free Delivery
              </p>
              <p className="text-white text-sm font-medium flex gap-2  items-center">
                <span>
                  <img src="/public/image/card.png" alt="" className="h-7" />
                </span>
                Limited Time
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 my-2">
            <img src="/public/image/qrcode.jpg" alt="qrcode" className="h-24" />
            <div>
              <img
                src="/public/image/app store.png"
                alt=""
                className="h-6 my-4"
              />
              <img
                src="/public/image/playstore.png"
                alt=""
                className="h-6 my-4"
              />
            </div>
          </div>
          <p className="text-xs font-medium">Download the app Now!</p>
        </div>
      </div>

      {/* cards */}

      <div className="py-2 lg:px-32 mt-12">
        <p className="font-normal text-2xl text-[#424242] py-5">Flash Sales</p>
        <div className="flex justify-between items-center p-5 border-b-2 bg-white">
          <p className="text-orange-500 font-medium">On Sale Now</p>
          <p className="border-2 border-orange-500 text-orange-500 font-semibold p-2">
            SHOP ALL PRODUCTS
          </p>
        </div>
        <div className="flex justify-center items-center flex-wrap bg-white gap-3 p-3 border-b-2 h-auto">
          {products.map((product) => {
            return (
              <div key={product.id}>
                <Card
                  description={product.description}
                  image={product.image}
                  price={product.price}
                  orgin={product.orgin}
                  discount={product.discount}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-2 lg:px-32 my-2">
        <p className="font-normal text-2xl text-[#424242] py-5">Just For You</p>

        <div className="flex gap-4 mb-5 flex-wrap justify-center">
          {youitems.map((youitems) => {
            return (
              <div key={youitems.id}>
                <Foryou
                  image={youitems.image}
                  description={youitems.description}
                  price={youitems.price}
                  discount={youitems.discount}
                />
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
