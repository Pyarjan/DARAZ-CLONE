const Foryou = ({ image, title, description, price, discount }) => {
  return (
    <div className="bg-white w-[12.1rem] h-auto hover:shadow-md">
      <img src={image} alt={title}  className="h-auto w-full"/>
      <div className="p-2">
        <p className="line-clamp-2">{description}</p>
       <p className="text-[#FE5418] py-1 font-medium">{price}</p>
       <div className="flex  justify-between">
       <p>{discount}</p>
       {/* <p className="text-[#FE5418]">Add to Cart</p> */}
       </div>
      </div>
    </div>
  );
};

export default Foryou;
