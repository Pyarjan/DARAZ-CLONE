const Card = ({ image, description, price, orgin, discount }) => {
    return (
      <>
        <div className=" w-[12rem] hover:shadow-md ">
          <img src={image} alt='' className="w-full h-[12rem] object-cover " />
          <div className="p-2">
            <p className="w-full line-clamp-2">{description}</p>
            <p className="text-orange-500 font-medium text-base">{price}</p>
            <p><s className="text-gray-400 text-sm">{orgin}</s> {discount}</p>
          </div>
        </div>
      </>
    );
  };
  
  
  
  export default Card;
  