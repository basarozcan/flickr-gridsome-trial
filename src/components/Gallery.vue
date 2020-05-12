<template>
    <div class="m-2 rounded-sm">
        <g-link :to="item.path">
          <g-image :alt="item.id" :src="item.url_sq" width="100%" class="rounded-lg"/>
        </g-link>
      </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: ['item'],
}
</script>