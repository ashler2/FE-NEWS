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

  let { a, b } = ref[sort];
  return await axios.get(`${URL}/articles`, {
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

const addComment = async (id, body, username) => {
  return await axios.post(`${URL}/articles/${id}/comments`, { username, body });
};
const deleteComment = async id => {
  return await axios.delete(`${URL}/comments/${id}`);
};

const patchVote = async (id, inc_votes, section) => {
  return await axios.patch(`${URL}/${section}/${id}`, { inc_votes });
};

const postArticle = async (body, topic, author, title) => {
  console.log(body, topic, author, title);
  console.log({ body });
  return await axios.post(`${URL}/articles`, {
    title,
    body,
    topic,
    author
  });
};

export {
  fetchArticles,
  fetchTopics,
  fetchArticle,
  fetchComments,
  addComment,
  deleteComment,
  patchVote,
  postArticle
};
