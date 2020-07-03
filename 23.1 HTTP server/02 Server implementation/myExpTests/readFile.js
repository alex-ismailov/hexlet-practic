import { promises as fs} from 'fs';
import path from 'path';

const readBook = async (name) => {
  const bookPath = path.join(`${path.resolve()}/23.1+ HTTP server/02 Server implementation/phonebook.txt`);
  const book = await fs.readFile(bookPath, 'utf-8');
  return book;
};

readBook().then((res) => {
  console.log(res);
});

// const name = 'tada'
// console.log(`${path.resolve()}/23.1+ HTTP server/02 Server implementation/${name}.txt`);