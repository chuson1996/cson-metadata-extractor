const app = require('express')();
const MetaInspector = require('node-metainspector');
const websiteLogo = require('website-logo');

app.use(require('cors')());

function getLogo(url) {
  return new Promise((resolve, reject) => {
    websiteLogo(url, function(error, images) {
      if (error) return reject(error);
      return resolve(images);
    });
  });
}


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
  Promise.all([
    getMetaData(req.query.url),
    getLogo(req.query.url)
  ])
  .then(([logoInfo, metaInfo]) => res.json({ ...metaInfo, ...logoInfo }))
  .catch((error) => res.status(400).json(error));
});

app.listen(process.env.PORT, () => {
  console.log('Listening on port ' + process.env.PORT);
})

module.exports = {
  getLogo,
  getMetaData
};
