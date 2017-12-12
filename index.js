const app = require('express')();
const MetaInspector = require('node-metainspector');

app.use(require('cors')());

function getMetaData(url) {
  return new Promise((resolve, reject) => {
    try {
      const client = new MetaInspector(
        url,
        { timeout: 5000 }
      );

      client.on('fetch', () => {
        const { description, title, author, keywords, rootUrl } = client;
        resolve({ description, title, author, keywords, rootUrl });
      });

      client.on('error', () => {
        // console.log(err);
        reject({
          status: 404,
          message: `Metadata not found`
        });
      });

      client.fetch();
    } catch (error) {
      reject({
        status: 404,
        message: `Metadata not found`
      });
    }
  });
}

app.get('/', (req, res) => {
  getMetaData(req.query.url)
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json(error));
});

app.listen(process.env.PORT, () => {
  console.log('Listening on port 3001');
})
