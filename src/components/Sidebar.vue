<template>
  <div>
    <div class="mt-8 px-6">
      <h2 class="text-xs font-semibold text-gray-600 uppercase tracking-wide">Categories</h2>
      <div class="mt-3">
        <div v-for="edge in $static.cats.edges" :key="edge.node.id" >
          <g-link class="-mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-lg" :to="edge.node.path">
            <span class="inline-flex">
              <span class="ml-2 text-gray-900">{{ edge.node.title }}</span>
            </span>
          </g-link>
        </div>
      </div>
    </div>
  </div>
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
  name: "Sidebar"
};
</script>