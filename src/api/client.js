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

export default {
  get
};
