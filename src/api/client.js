import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API
});

const get = url =>
  instance
    .get(url)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      throw error;
    });

const post = (url, payload) =>
  instance
    .post(url, payload)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      throw error;
    });

const put = (url, payload) =>
  instance
    .put(url, payload)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      throw error;
    });

const del = (url, payload) =>
  instance
    .delete(url)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      throw error;
    });

export default {
  get,
  post,
  put,
  del
};
