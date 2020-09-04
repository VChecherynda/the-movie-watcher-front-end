import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API
});

const get = (url, config) =>
  instance
    .get(url, config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      throw error;
    });

const post = (url, payload, config) =>
  instance
    .post(url, payload, config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      throw error;
    });

const put = (url, payload, config) =>
  instance
    .put(url, payload, config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      throw error;
    });

const del = (url, config) =>
  instance
    .delete(url, config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      throw error;
    });

const upload = (url, payload) =>
  post(url, payload, {
    headers: {
      "content-type": "multipart/form-data"
    }
  });

export default {
  get,
  post,
  put,
  del,
  upload
};
