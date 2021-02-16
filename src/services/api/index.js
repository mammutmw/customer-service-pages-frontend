import axios from "axios";

// Auth token
export const getAuthToken = async () => {
  const url = process.env.REACT_APP_ACCESS_TOKEN_URL;

  return await axios.get(url);
};

// Fetch topics from cms
export const getPages = async (authToken) => {
  const env = process.env.REACT_APP_CMS_ENV;
  const market = process.env.REACT_APP_CMS_MARKET;
  const url =
    process.env.REACT_APP_CMS_BASE_URL +
    `/entries?contentType=customerServicePage&market=${market}&environment=${env}`;
  return await axios.get(url, {
    params: {},
    headers: { Authorization: "Bearer " + authToken }
  });
};
