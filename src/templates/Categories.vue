<template>
  <Layout>
    <!-- Title -->
    <div class="relative shadow-md">
      <div class="flex items-center justify-between px-5 py-4 bg-white">
        <h3 class="text-base lg:text-lg xl:text-xl text-gray-900">Photos for {{ $page.categories.title }}</h3>
      </div>           
    </div>
    <!-- Title ends -->

    <div class="p-3 flex-1 overflow-y-auto">
      <div class="flex flex-wrap justify-center sm:justify-between">
        <div class="" v-for="edge in $page.categories.belongsTo.edges" :key="edge.node.id">
          <Gallery :item="edge.node" />
        </div>
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
import Gallery from "~/components/Gallery.vue";

export default {
  components: {
    Gallery
  }
};
</script>