<template>
    <ul class="list-group">
      <li v-for="edge in $static.cats.edges" :key="edge.node.id" class="list-group-item">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </li>
    </ul>
</template>

<static-query>
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
</static-query>

<script>
export default {
  name: 'Sidebar',
}
</script>