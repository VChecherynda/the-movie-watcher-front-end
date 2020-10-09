// export function uploadMovieList(payload) {
//   return async function (dispatch) {
//     const { pending, success, error } = actions.uploadMovies;
//     dispatch(pending(true));

//     try {
//       const response = await client.post("movies/upload", payload, {
//         headers: {
//           "content-type": "multipart/form-data",
//         },
//       });
//       dispatch(pending(false));
//       dispatch(success(response.data));
//     } catch (err) {
//       dispatch(pending(false));

//       if (!err.response) {
//         return dispatch(error(err));
//       }

//       dispatch(error(err.response.data));
//     }
//   };
// }

