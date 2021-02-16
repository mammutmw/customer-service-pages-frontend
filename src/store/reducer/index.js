import pages from "./pages";
import auth from "./auth";
import currentURLReducer from "./bcrumb";
import recomendedTopics from "./recomendedTopics";

// Export  reducer  modules
const reducers = {
  pages,
  auth,
  recomendedTopics,
  breadcrumbPathname: currentURLReducer
};
export default reducers;
