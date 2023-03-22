import React from "react";
import Search from "../components/Search";
import Categories from "../components/SearchPage/Categories/Categories";
import CartImg from "../assets/images/cart.svg";

const SearchPage = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-xs py-3 gap-1.5 ml-auto cursor-pointer active:opacity-[0.5] ease-linear duration-75">
            <span>2</span>
            <img className="w-5 h-5" src={CartImg} alt="cart" />
          </div>
        </div>
        <h1 className="text-3xl font-bold uppercase font-[RoadRadio] pt-[17px] pb-[9px]">
          Поиск
        </h1>
        <div className="mt-[5px] ease-linear duration-200">
          <Search />
        </div>
        <div className="border-b border-gray-003 border-solid flex items-center gap-4 mt-[31px]">
          <div className="pb-1.5 font-bold leading-[19px] uppercase border-b-[2px] border-black-001 borde-solid cursor-pointer active:opacity-[0.5] ease-linear duration-75">
            Для нее
          </div>
          <div className="pb-1.5 leading-[19px] uppercase cursor-pointer active:opacity-[0.5] ease-linear duration-75">
            Для него
          </div>
        </div>
        <div className="mt-[13px]">
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
