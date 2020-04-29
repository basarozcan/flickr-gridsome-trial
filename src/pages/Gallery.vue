<template>
  <Layout>
    <div>
    <div v-for="edge in $page.allPhotos.edges" :key="edge.node.title">
      <h1 v-html="edge.node.title" />
      <img :src="edge.node.url_sq">
    </div>
  </div>
  </Layout>
</template>

<page-query>
query {
  allPhotos {
    edges {
      node {
        content
        title
        url_sq
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Gallery'
  }
}
</script>
