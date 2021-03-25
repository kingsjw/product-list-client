import productListData from '../data/products';

export const getRecommendProductApi = () => {
  const randomIndexList: Array<number> = [];
  while (randomIndexList.length < 4) {
    const randomIndex = Math.floor(Math.random() * ((productListData.length + 0))) + 0;
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