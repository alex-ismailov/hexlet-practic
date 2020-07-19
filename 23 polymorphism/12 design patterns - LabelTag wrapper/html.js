import fs from 'fs';

const save = (tag, filePath) => {
  const html = tag.render();
  fs.writeFileSync(filePath, html);
};

export default save;
