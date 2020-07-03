import Express from 'express';

const app = new Express();

const getRandomNumber = (min = 0, max = 1000) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

app.get('/', (req, res) => {
  res.json({ key1: getRandomNumber() });
});

app.listen(3000, () => {
  console.log('My first server listening on port 3000!');
});
