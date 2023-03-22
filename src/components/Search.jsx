import React from "react";
import SearchImg from "../assets/images/search.svg";

const Search = () => {
  return (
    <div className="flex items-center gap-3 w-full">
      <div className="flex items-center gap-[11px] rounded bg-gray-002 py-2.5 px-[11px] w-full">
        <img className="w-3.5 h-[15px]" src={SearchImg} alt="search" />
        <input
          className="bg-transparent w-full placeholder:text-base placeholder:text-gray-001"
          type="text"
          placeholder="Поиск"
        />
      </div>
    </div>
  );
};

export default Search;
