import { observable } from 'mobx';
import { ProductData } from '../type/product';

interface PageState {
  page: number;
  totalPage: number;
};

interface ProductStoreType {
  productList: ProductData[];
  pageState: PageState,
  addProductList: (roductList: ProductData[]) => void;
  setPageState: (pageState: PageState) => void;
};

export const productStore = observable<ProductStoreType>({
  productList: [],
  pageState: {
    page: 1,
    totalPage: 1,
  },
  setPageState(pageState: PageState) {
    this.pageState = pageState;
  },
  addProductList(productList: ProductData[]) {
    this.productList.push(...productList);
  },
});