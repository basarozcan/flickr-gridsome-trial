<template>
  <Layout>
    <h1>Category {{ $page.categories.tag}}</h1>
    <div class="grid" v-for="photo in photos" v-bind:key=photo.id>
      <g-image :alt="photo.title" :src="photo.url_q" width="500" />
    </div>
  </Layout>
</template>

<page-query>
  query Categories($id: ID!) {
    categories(id: $id){
      title
      id
      tag
    }
  }
</page-query>

<script>
const axios = require('axios');

export default {
  data() {
    return {
      isLoaded: false,
      photos: []
    }
  },
  methods: {
    async fetchFromFlickr(tags){
      
      const api_key = "5601e3a16d1a6218c0f8702753c6bbda"

      try {
        const results = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${tags}&format=json&nojsoncallback=1&extras=tags,url_q,url_o`)
        this.photos = results.data.photos.photo
        this.isLoaded = true
      } catch (error) {
        console.log(error)
      }
      
    }
  },
  mounted(){
    // const response = await fetch(`https://api.example.com/user/${id}`)
    // this.user = await response.json()
    const {tag} = this.$page.categories
    console.log(tag);
    this.fetchFromFlickr(tag)

  }
}
</script>
<style lang="css">
  .grid{
    margin-bottom: 1em;
  }
</style>
