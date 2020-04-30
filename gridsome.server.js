// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    
    const api_key = "5601e3a16d1a6218c0f8702753c6bbda"
    const categories = require('./src/data/categories.json');

    const photosCollection = actions.addCollection({
      typeName: 'Photos',
    })
    const tagCollection = actions.addCollection({
      typeName: 'Categories'
    })
    
    photosCollection.addReference('tag','Categories')

    for (const category of categories.data) {

      // it is beautiful to see loaded categories slowly on terminal :D
      console.log(category.tag); 

      tagCollection.addNode({
        id: category.id,
        title: category.title,
        tag: category.tag,
      })

      let { data } = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${category.tag}&format=json&nojsoncallback=1&extras=tags, url_q, url_o,owner_name`);
      const photos = data.photos.photo
      for (const item of photos) {
        photosCollection.addNode({
          id: item.id,
          title: item.title,
          tag: [category.id],
          url_sq: item.url_q,
          url_org: item.url_o,
          path: '/photos/' + item.id,
          owner: item.ownername
        })
      }
    }
  })

  // api.createPages(({ createPage }) => {
  //   createPage({
  //     path: '/cat/:category',
  //     component: './src/templates/Category.vue',
  //   })
  // })
}
