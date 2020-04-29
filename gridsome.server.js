// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const tags = 'lego'
    const api_key = "5601e3a16d1a6218c0f8702753c6bbda"
    const { data } = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${tags}&format=json&nojsoncallback=1&extras=tags, url_q,url_o`)
    const collection = actions.addCollection({
      typeName: 'Photos'
    })
    for (const item of data.photos.photo) {
      collection.addNode({
        content: item.id,
        title: item.title,
        tags: item.tags,
        url_sq: item.url_q,
        url_org: item.url_o
      })
    }
  })

  // api.loadSource(({ addCollection }) => {
  //   // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  // })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
