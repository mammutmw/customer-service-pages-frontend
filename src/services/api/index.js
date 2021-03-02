import axios from "axios";

// Auth token
export const getAuthToken = async () => {
  const url = process.env.REACT_APP_ACCESS_TOKEN_URL;

  return await axios.get(url);
};

// Fetch topics from cms
export const getPages = async ({ market, environment }) => {
  const url = process.env.REACT_APP_CMS_DATA;
  return await axios.get(url, {
    params: { market, environment }
  });
};
