import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import LoaderComponents from '../../Components/Loader';
import ProductListItemComponents from '../../Components/ProductListItem';
import { STATUS } from '../../CommonUtils/status';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAsyncSearchProduct, getSearchProducts, getSearchProductsStatus, clearSearch } from '../../Store/searchSlice';
const SearchContainerPage = ()=>{
    const dispatch = useDispatch();

    const searchProducts = useSelector(getSearchProducts);
    const searchProductsStatus = useSelector(getSearchProductsStatus);


    const params = useParams();
    const searchText = params.searchKey;
    useEffect(() => {
        dispatch(clearSearch());
        dispatch(fetchAsyncSearchProduct(searchText));
        // eslint-disable-next-line
      }, [searchText]);


      if(searchProducts.length === 0){
        return (
          <div className='container'>
            <div className='text-danger'>
              <h3>No Products found.</h3>
            </div>
          </div>
        )
      }
    return (
        <>
        
        {searchProductsStatus === STATUS.LOADING ? <LoaderComponents /> : <ProductListItemComponents category={searchText} products={searchProducts} />}
        </>
    )
}

export default SearchContainerPage;