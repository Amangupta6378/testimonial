import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Cards = (props) => {
  let reviews = props.reviews;
  return (
    <div className="flex flex-col md:relative absolute top-[-5rem]">
      <div className="absolute top-[3rem]">
        <img className="aspect-square   w-[100px] h-[100px] rounded-full " src={reviews.image}></img>
      </div>
      <div className="aspect-square  w-[100px] h-[100px] rounded-full ms-1  bg-violet-500 mt-10"></div>

      <div className="text-2xl font-semibold mt-[-10]">{reviews.name}</div>

      <div className="text-violet-300">{reviews.job}</div>

      <div className="mx-auto my-7">
       <FaQuoteLeft className="text-violet-500"/>
      </div>

      <p>
        {reviews.description}
      </p>

      <div className="mx-auto mt-7 ">
      <FaQuoteRight className="text-violet-500"/>
      </div>
    </div>
  );
};

export default Cards;
