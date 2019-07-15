import axios from "axios";
const URL = `https://ash-news-backend.herokuapp.com/api`;

const fetchArticles = async () => {
  return await axios.get(`${URL}/articles`);
};

const fetchTopics = async () => {
  return await axios.get(`${URL}/topics`);
};
export { fetchArticles, fetchTopics };
