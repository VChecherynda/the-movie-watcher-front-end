import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API
});

const get = url =>
  instance
    .get(url)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });

const post = (url, payload) =>
  instance
    .post(url, {
      headers: { "Content-Type": "application/json" },
      data: { ...payload }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });

const put = (url, payload) =>
  instance
    .put(url, {
      headers: { "Content-Type": "application/json" },
      data: { ...payload }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });

const del = (url, payload) =>
  instance
    .delete(url)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });

export default {
  get,
  post,
  put,
  del
};
