import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts,getCategoryProducts } from '../../redux/productSlice';
import Loading from '../loading/Loading';
import Product from './Product';
import ReactPaginate from 'react-paginate';

const Products = ({category,sort}) => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector(state => state.products);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };
console.log(sort,"sort")
  useEffect(() => {
    if(category){
      dispatch(getCategoryProducts(category));
    }else{
      dispatch(getProducts());
    }
    
  }, [dispatch,category]);

  return (
    <div>
      {productsStatus === "LOADING" ? (
        <Loading />
      ) : (
        <>
          <div className='flex flex-wrap'>
            {currentItems?.sort((a,b)=>sort==="inc" ? a.price-b.price : sort==="dec"?b.price-a.price :"").map((product, i) => (
              <Product key={i} product={product} />
            ))}
          </div>
          <ReactPaginate
            className='paginate'
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            forcePage={Math.floor(itemOffset / itemsPerPage)} // Bulunduğun sayfaya göre güncellenir
          />
        </>
      )}
    </div>
  );
};

export default Products;
