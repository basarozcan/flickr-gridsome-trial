<template>
    <div class="item-wrapper">
        <g-link :to="item.path">
          <g-image :alt="item.id" :src="item.url_sq"/>
        </g-link>
      </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: ['item'],
}
</script>