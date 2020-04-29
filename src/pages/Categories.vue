<template>
  <Layout>
    <div>
    <div v-for="edge in $page.cats.edges" :key="edge.node.id">
      <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
    </div>
  </div>
  </Layout>
</template>

<page-query>
query Categories{
  cats: allCategories {
    edges {
      node {
        id
        title
        tag
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Categories'
  }
}
</script>
