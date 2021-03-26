import { useEffect, useState, useCallback } from 'react';
import { getProductDataPaginationApi } from '../api/api';
import ProductList from '../components/product/ProductList';

const ProductContainer = () => {
  const [productList, setProductList] = useState<any[]>([]);
  const [pageState, setPageState] = useState({
    page: 1,
    totalPage: 1,
  });

  const getProductList = useCallback(async (req = { page: 1 }) => {
    const { data }: any = await getProductDataPaginationApi(req);
    const { contents, totalPage } = data;
    setPageState({
      page: req.page,
      totalPage,
    });
    setProductList((originProductListData) => [...originProductListData, ...contents]);

  }, [setProductList, setPageState]);


  useEffect(() => {
    if (productList && productList.length <= 0) {
      getProductList();
    }
  }, [productList, getProductList]);

  return (
    <ProductList
      title={ "상품 목록" }
      productList={ productList }
    />
  );
};

export default ProductContainer;
