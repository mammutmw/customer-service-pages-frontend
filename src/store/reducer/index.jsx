import pages from "./pages";
import auth from "./auth";
import currentURLReducer from "./bcrumb";
import recomendedTopics from "./recomendedTopics";
import loading from "./loading";

// Export  reducer  modules
const reducers = {
  loading,
  pages,
  auth,
  recomendedTopics,
  breadcrumbPathname: currentURLReducer
};
export default reducers;
