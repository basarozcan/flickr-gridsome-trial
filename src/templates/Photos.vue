<template>
  <Layout>
    <div class="showcase">
      <div class="image">
        <img class="img-fluid rounded" :src="$page.photos.url_org" />
      </div>
      <div class="description">
        <div class="return-button">
          <g-link :to="$page.photos.tag[0].path">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0C7.17731 0 0 7.17731 0 16C0 24.8227 7.17731 32 16 32C24.8227 32 32 24.8227 32 16C32 7.17731 24.8227 0 16 0ZM19.6093 21.724C20.1306 22.2453 20.1306 23.088 19.6093 23.6093C19.3493 23.8693 19.008 24 18.6666 24C18.3253 24 17.9839 23.8693 17.7239 23.6093L11.0573 16.9427C10.536 16.4214 10.536 15.5787 11.0573 15.0574L17.724 8.39069C18.2453 7.86938 19.088 7.86938 19.6093 8.39069C20.1306 8.912 20.1306 9.75469 19.6093 10.276L13.8853 16L19.6093 21.724Z"
                fill="black"
              />
            </svg>
          </g-link>
        </div>
        <div class="title">{{$page.photos.title}}</div>
        <div class="author">photo by {{$page.photos.owner}}</div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Photos($id: ID!) {
    photos(id: $id){
      id
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



