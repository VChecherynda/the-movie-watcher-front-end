import collectionMiddleware from "./collection";
import currentMiddleware from "./current";
import createMiddleware from "./create";
import deleteMiddleware from "./delete";

export default [
  ...collectionMiddleware,
  ...currentMiddleware,
  ...createMiddleware,
  ...deleteMiddleware,
];
