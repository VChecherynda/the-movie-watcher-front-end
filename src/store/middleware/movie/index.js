import collectionMiddleware from './collection';
import currentMiddleware from './current';
import deleteMiddleware from './delete';


export default [...collectionMiddleware, ...currentMiddleware, ...deleteMiddleware]