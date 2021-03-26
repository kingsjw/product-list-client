import { useEffect, useState, useCallback, useMemo } from 'react';
import { getProductDataPaginationApi } from '../api/api';
import ProductList from '../components/product/ProductList';
import useInfinteScroll from '../helper/useInfinteScroll';

const ProductContainer = () => {
  const [productList, setProductList] = useState<any[]>([]);
  const [pageState, setPageState] = useState<{ page: number, totalPage: number }>({
    page: 1,
    totalPage: 1,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [loadTarget, setLoadTarget] = useState<HTMLDivElement | null>(null);

  const getProductList = useCallback(async (req = { page: 1 }) => {
    setLoading(true);
    const { data }: any = await getProductDataPaginationApi(req);
    const { contents, totalPage } = data;
    setPageState({
      page: req.page,
      totalPage,
    });
    setProductList((originProductListData) => [...originProductListData, ...contents]);
    setLoading(false);
  }, [setProductList, setPageState]);

  useInfinteScroll({
    target: loadTarget,
    onIntersect: ([{ isIntersecting }] : any) => {
      if (isIntersecting && !loading) {
        getProductList({ page: pageState.page + 1 });
      }
    },
  });
  
  useEffect(() => {
    if (productList && productList.length <= 0) {
      getProductList();
    }
  }, [productList, getProductList]);

  const isMaxPage = useMemo(() => !loading && pageState.page === pageState.totalPage, [loading, pageState]);

  return (
    <ProductList
      title={ "상품 목록" }
      productList={ productList }
      loading={ loading }
      isMaxPage={ isMaxPage }
      setLoadTarget={ setLoadTarget }
    />
  );
};

export default ProductContainer;
