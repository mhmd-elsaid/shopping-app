import { createStore } from 'redux';
import reducers from '../redux/reducers';
const Store = createStore( reducers );
export default Store;