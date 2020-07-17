import Express from 'express';

const getRandomNum = (min = -15, max = 40) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

export default () => {
  const app = new Express();

  app.use((req, res, next) => {
    console.log(`received request`);
    next();
  });

  app.get('/api/v2/cities/:city', (req, res) => {
    const temperature = getRandomNum();
    const city = req.params.city;
    // { "name": "<имя города>", temperature: "<температура>" }
    res.json({
      city,
      temperature,
    });
  });

  return app;
};

// 23 polymorphism/09 dependency Inversion - Weather Service/bin/wheather.js berlin
// node bin/weather.js berlin