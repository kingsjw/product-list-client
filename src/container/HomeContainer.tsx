import { useEffect, useState } from 'react';
import { getRecommendProductApi } from '../api/api';
import ProductList from '../components/product/ProductList';
import useStore from '../helper/useStore';

const HomeContainer = () => {
  const {
    homeStore,
  } = useStore();
  const { productList } = homeStore;
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (productList && productList.length <= 0) {
      setLoading(true);
      getRecommendProductApi().then(({ data }: any) => {
        homeStore.setProductList(data);
        setLoading(false);
      });
    }
  }, [homeStore, productList]);

  return (
    <ProductList
      title={ "kingsjw 추천 상품" }
      productList={ productList }
      loading={ loading }
    />
  );
};

export default HomeContainer;
