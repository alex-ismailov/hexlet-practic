module.exports = {
  plugins: [
      require('autoprefixer'),
      require('css-mqpacker'), //группирует все media запросы в складыает их рядом в app.css
      require('cssnano')({ // минификация
          preset: [
              'default', {
                  discardComments: { // удаляет комменты с продакшена
                      removeAll: true,
                  },
              },
          ],
      })
  ],
};
