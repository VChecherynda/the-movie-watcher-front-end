export const videoFormats = ["VHS", "DVD", "Blu-Ray"];

export const initialData = {
  title: "Title",
  release: "1988",
  format: videoFormats[0],
  stars: "John"
};

export const formInputs = [
  {
    id: "movie-title",
    type: "text",
    title: "Title",
    name: "title",
    placeholder: "Enter title..."
  },
  {
    id: "movie-release",
    type: "text",
    title: "Release",
    name: "release",
    placeholder: "Enter release..."
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
    name: "stars",
    placeholder: "Enter stars..."
  }
];
