import { useEffect, useState, useCallback, useMemo } from 'react';
import { getProductDataPaginationApi } from '../api/api';
import ProductList from '../components/product/ProductList';
import useInfinteScroll from '../helper/useInfinteScroll';
import useStore from '../helper/useStore';

const ProductContainer = () => {
  const {
    productStore,
  } = useStore();
  const { productList, pageState } = productStore;
  
  const [loading, setLoading] = useState<boolean>(false);
  const [loadTarget, setLoadTarget] = useState<HTMLDivElement | null>(null);

  const getProductList = useCallback(async (req = { page: 1 }) => {
    setLoading(true);
    const { data }: any = await getProductDataPaginationApi(req);
    const { contents, totalPage } = data;
    productStore.setPageState({
      page: req.page,
      totalPage,
    });
    productStore.addProductList(contents);
    setLoading(false);
  }, [productStore]);

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
