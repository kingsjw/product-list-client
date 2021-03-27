import { productStore } from '../store/product.store';
import { homeStore } from '../store/home.store';

const useStore = () => ({ productStore, homeStore });

export default useStore;
