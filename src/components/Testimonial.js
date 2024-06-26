import React, { useState } from "react";
import Cards from "./Cards";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";


const Testimonial = (props) => {
  let reviews = props.reviews;

  const [index, setIndex] = useState(0);

  function leftHandler (){
    if (index-1 < 0) {
        setIndex(reviews.length-1)
    }
    else{
        setIndex(index-1)
    }
  }

  function rightHandler(){
    if (index+1 >= reviews.length) {
        setIndex(0)
    }
    else{
        setIndex(index+1)
    }
  }

  function surpriseHandler(){
    let randomIndex = Math.floor(Math.random() * reviews.length)
    setIndex(randomIndex)
  }

  return (
    <div className=" flex flex-col w-[100vw] h-[100vh] bg-gray-200 justify-center items-center">
      <div className="">
        <h1 className="text-4xl font-bold">Our Testimonial</h1>
        <div className="w-[1/5] h-[4px] bg-violet-500" ></div>
      </div>


      <div className="w-[50%] bg-white mt-10">

      <Cards reviews={reviews[index]} />
      <div className="relative mt-[-50px]">
        <button className=" me-5 mb-5">
        <FaLessThan onClick={leftHandler} className="text-violet-500 text-xl"/>
        </button>
        <button>
        <FaGreaterThan onClick={rightHandler} className="text-violet-500 text-xl" />
        </button>
      </div>
      <div>
        <button onClick={surpriseHandler} className="btn border px-7 py-2 rounded-md bg-violet-400 text-white text-xl hover:bg-violet-500 transition-all duration-200 relative mb-5">Surprise Me</button>
      </div>
      </div>
     
    </div>
  );
};

export default Testimonial;
