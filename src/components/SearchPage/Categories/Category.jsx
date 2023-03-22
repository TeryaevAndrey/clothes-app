import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRightImg from "../../../assets/images/arrow-right.svg";

const Category = ({title}) => {
    return (
        <Link className="flex items-center justify-between py-3 border-b border-gray-003 border-solid leading-[19px] active:opacity-[0.5] ease-linear duration-75" to="/">
            {title}
            <img className="w-2 h-[13px]" src={ArrowRightImg} alt="arrow" />
        </Link>
    );
};

export default Category;