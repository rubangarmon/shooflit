import { createHook } from "react-sweet-state";
import Store from '../context/AppListContext';
const useRandomListContext = createHook(Store);
export default useRandomListContext;