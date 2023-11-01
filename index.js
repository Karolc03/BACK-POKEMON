const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const config = require('./src/config/config.js')
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(config.PORT, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
