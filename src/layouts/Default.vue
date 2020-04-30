<template>
  <div class="page">
    <div class="wrapper">
      <nav class="navbar">
        <div class="logo">
          <g-link to="/">{{$static.metadata.siteName}}</g-link>
        </div>
      </nav>
      <div class="main">
        <aside class="sidebar">
          <Sidebar />
        </aside>
        <main class="content">
          <slot/>
        </main>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Sidebar from '~/components/Sidebar.vue'
export default {
  components: {
    Sidebar
  }
}
</script>
