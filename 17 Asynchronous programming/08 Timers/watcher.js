import fs from 'fs';

// BEGIN (write your solution here)
const watch = (filepath, interval, cb) => {
  let checkTime = Date.now();

  const checkFile = (id) => {
    fs.stat(filepath, (_err, stat) => {
      if (_err) {
        clearInterval(id);
        cb(_err);
        return;
      }

      const { mtimeMs } = stat;
      if (mtimeMs > checkTime) {
        checkTime = mtimeMs;
        cb(null);
      }
    });
  };

  const id = setInterval(() => checkFile(id), interval);

  return id;
};

export default watch;
