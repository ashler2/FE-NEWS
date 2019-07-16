import axios from "axios";
const URL = `https://ash-news-backend.herokuapp.com/api`;

const fetchArticles = async pa => {
  let value = pa;
  console.log(value, "v");

  return await axios.get(`${URL}/articles/`, {
    params: {
      p: value
    }
  });
};

const fetchTopics = async () => {
  return await axios.get(`${URL}/topics`);
};

const fetchArticle = async id => {
  return await axios.get(`${URL}/articles/${id}`);
};
export { fetchArticles, fetchTopics, fetchArticle };
