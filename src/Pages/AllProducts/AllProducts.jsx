import React from 'react';
import { CgSpinner } from 'react-icons/cg';
import { useParams } from 'react-router-dom';

const AllProducts = () => {
    const { category } = useParams();
    console.log(category)
    return <div className='min-h-screen text-center font-bold text-5xl......'>{category} product is comming soon <CgSpinner className='animate-spin text-6xl'></CgSpinner></div>;
};

export default AllProducts;