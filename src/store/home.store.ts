import { observable } from 'mobx';
import { ProductData } from '../type/product';

interface ProductStoreType {
  productList: ProductData[];
  setProductList: (productList: ProductData[]) => void;
};

export const homeStore = observable<ProductStoreType>({
  productList: [],
  setProductList(productList: ProductData[]) {
    this.productList.push(...productList);
  },
});