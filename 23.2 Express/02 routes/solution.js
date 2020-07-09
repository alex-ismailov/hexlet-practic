import Express from 'express';

export default () => {
  // BEGIN (write your solution here)
  const app = new Express();

  const counter = {
    value: 0,
  };

  app.get('/', (req, res) => { // curl localhost:8080
    res.json(counter);
  });
  app.post('/increment', (req, res) => { // curl --data increment "localhost:8080/increment"
    counter.value += 1;
    res.status(204).end();
  });
  app.post('/decrement', (req, res) => { // curl --data decrement "localhost:8080/decrement"
    counter.value -= 1;
    res.status(204).end();
  });
  app.delete('/reset', (req, res) => { // curl -X DELETE "localhost:8080/reset"
    counter.value = 0;
    res.status(204).end();
  });
  app.put('/set', (req, res) => { // curl -X PUT "localhost:8080/set?value=73"
    const { value } = req.query;
    counter.value = Number(value);
    res.status(204).end();
  });
  // END

  return app;
};
