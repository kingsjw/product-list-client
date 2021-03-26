import productListData from '../data/products';

const storageKey = 'class101-cart';
const getStorageData = () => JSON.parse(JSON.stringify(window.localStorage.getItem(storageKey) || []));

export const getRecommendProductApi = () => {
  const randomIndexList: Array<number> = [];
  while (randomIndexList.length < 4) {
    const randomIndex = Math.floor(Math.random() * productListData.length);
    if (randomIndexList.indexOf(randomIndex) === -1) {
      randomIndexList.push(randomIndex);
    }
  }
  const result = randomIndexList.map((index) => productListData[index]);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: result });
    }, 1500);
  });
};


export const getProductDataPaginationApi = ({ page }: { page: number }) => {
  return new Promise((resolve, reject) => {
    const CONTENT_COUNT = 6;
    const startPage = (page - 1) * CONTENT_COUNT;
    const cartStorage = getStorageData();
    setTimeout(() => {
      resolve({
        data: {
          contents: productListData.map((obj) => ({ ...obj, isCarted: cartStorage.indexOf(obj.id) !== -1 })).slice(startPage, startPage + CONTENT_COUNT),
          totalPage: Math.ceil(productListData.length / CONTENT_COUNT),
        }
      });
    }, 1000)
  });
};