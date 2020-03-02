<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import EmptyLayout from '@/layouts/EmptyLayout';
// eslint-disable-next-line import/no-unresolved,import/extensions
import MainLayout from '@/layouts/MainLayout';

export default {
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    layout() {
      return `${this.$route.meta.layout || 'empty'}-layout`;
    },
  },
  components: {
    EmptyLayout, MainLayout,
  },
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
/*@import "~bootstrap";*/
@import "assets/index.css";
</style>
