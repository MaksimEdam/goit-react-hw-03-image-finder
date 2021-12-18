import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
axios.defaults.params = {
  key: "18992166-123806360f211761da038f5eb",
  image_type: "photo",
  orientation: "horizontal",
  per_page: "12",
};

async function imagesApi(nextName, page) {
  try {
    const { data } = await axios.get(`?q=${nextName}&page=${page}`);
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default imagesApi;
