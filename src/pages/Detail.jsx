import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailProducts } from '../redux/productSlice';
import Loading from '../components/loading/Loading';
import DetailComp from '../components/detail/DetailComp';
import { STATUS } from '../utils/status';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { productDetail, productDetailStatus } = useSelector((state) => state.products);

    useEffect(() => {
        if (productDetailStatus === STATUS.IDLE) {
            dispatch(getDetailProducts(id));
        }
    }, [dispatch, id, productDetailStatus]);

    console.log(productDetail, "product");

    return (
        <div>
            {productDetailStatus === STATUS.LOADING && <Loading />}
            {productDetailStatus === STATUS.SUCCESS && <DetailComp productDetail={productDetail} />}
            {productDetailStatus === STATUS.FAIL && <p>Error loading product details.</p>}
        </div>
    );
};

export default Detail;

