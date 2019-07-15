import axios from "axios";
const URL = `https://ash-news-backend.herokuapp.com/api`;

const fetchArticles = async () => {
  return await axios.get(`${URL}/articles`);
};

const fetchTopics = async () => {
  return await axios.get(`${URL}/topics`);
};

const fetchArticle = async id => {
  return await axios.get(`${URL}/articles/${id}`);
};
export { fetchArticles, fetchTopics, fetchArticle };
