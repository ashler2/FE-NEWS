import axios from "axios";
const URL = `https://ash-news-backend.herokuapp.com/api`;

const fetchArticles = async (p, topic) => {
  let value = p;

  // console.log(pa, "hello");
  return await axios.get(`${URL}/articles/`, {
    params: {
      p: value,
      topic
    }
  });
};

const fetchTopics = async () => {
  return await axios.get(`${URL}/topics`);
};

const fetchArticle = async id => {
  return await axios.get(`${URL}/articles/${id}`);
};

const fetchComments = async id => {
  return await axios.get(`${URL}/articles/${id}/comments`);
};
export { fetchArticles, fetchTopics, fetchArticle, fetchComments };
