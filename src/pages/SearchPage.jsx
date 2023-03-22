import React from "react";
import Search from "../components/Search/Search";

const SearchPage = () => {
  return (
    <div>
      <div className="container">
        <h1 className="text-3xl font-bold uppercase font-[RoadRadio]">Поиск</h1>
        <div className="mt-3.5">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
