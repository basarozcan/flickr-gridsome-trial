<template>
  <Layout>
    <!-- Title -->
    <div class="relative shadow-md">
      <div class="flex items-center justify-between px-5 py-4 bg-white">
        <g-link :to="$page.photos.tag[0].path">
          <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current text-gray-600">
            <path
              d="M9.707 3.293a1 1 0 010 1.414L5.414 9H13a9 9 0 019 9v2a1 1 0 11-2 0v-2a7 7 0 00-7-7H5.414l4.293 4.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z"
            />
          </svg>
        </g-link>
        <h3 class="text-base lg:text-lg xl:text-xl text-gray-900">{{$page.photos.title}}</h3>
      </div>           
    </div>
    <!-- Title ends -->

    <div class="p-3 flex-1 overflow-y-auto">
      <div class="image">
        <img class="img-fluid rounded" :src="$page.photos.url_org" />
      </div>
      <div class="flex flex-wrap -m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-8 h-8 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/32x32">
          <div class="flex-grow">
            <p class="text-gray-500 text-xs italic">photo by</p>
            <h2 class="text-gray-900 title-font font-medium">{{$page.photos.owner}}</h2>
          </div>
        </div>
      </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Photos($id: ID!) {
    photos(id: $id){
      id
      url_sq
      url_org
      owner
      title
      tag{
        id
        title
        path
      }
    }
  }
</page-query>



