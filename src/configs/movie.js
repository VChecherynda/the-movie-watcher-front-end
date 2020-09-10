export const videoFormats = ["VHS", "DVD", "Blu-Ray"];

export const initialData = {
  title: "Title",
  release: "1987",
  format: videoFormats[0],
  stars: ""
};

export const formInputs = [
  {
    id: "movie-title",
    type: "text",
    title: "Title",
    name: "title"
  },
  {
    id: "movie-release",
    type: "text",
    title: "Release",
    name: "release"
  },
  {
    id: "movie-format",
    type: "select",
    title: "Format",
    name: "format",
    options: videoFormats
  },
  {
    id: "movie-stars",
    type: "text",
    title: "Stars",
    name: "stars"
  }
];
