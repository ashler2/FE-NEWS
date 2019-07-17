import axios from "axios";
const URL = `https://ash-news-backend.herokuapp.com/api`;

const fetchArticles = async (p, topic, sort) => {
  let value = p;
  const ref = {
    DateDesc: { a: "created_at", b: "DESC" },
    DateAsc: { a: "created_at", b: "Asc" },
    CCASC: { a: "comment_count", b: "ASC" },
    CCDESC: { a: "comment_count", b: "DESC" },
    VotesDesc: { a: "votes", b: "Desc" },
    VotesAsc: { a: "votes", b: "ASC" }
  };
  console.log(ref[sort]);

  let { a, b } = ref[sort];
  return await axios.get(`${URL}/articles/`, {
    params: {
      p: value,
      topic,
      sort_by: a,
      order: b
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
