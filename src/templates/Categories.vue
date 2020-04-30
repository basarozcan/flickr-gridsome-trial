<template>
  <Layout>
    <h2 class="category-header">Photos for {{ $page.categories.title}}</h2>
    <div class="category-grid">
      <div class="item" v-for="edge in $page.categories.belongsTo.edges" :key="edge.node.id">
        <Gallery :item="edge.node" />
      </div>
    </div>
  </Layout>
</template>


<page-query>
  query ($id: ID!) {
    categories(id: $id){
      title
      id
      tag
      belongsTo{
        edges{
          node{
            ... on Photos{
              id
              url_sq
              path
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import Gallery from '~/components/Gallery.vue'

export default {
  components: {
    Gallery
  },
}
</script>