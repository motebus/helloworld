<template lang="pug">
  .ContainerRatio(:style="style")
    .ContainerRatio__container
      slot
</template>
<script>
export default {
  name: 'ContainerResponsive',
  props: {
    height: {
      type: String,
      default: '100%',
    },
  },
  computed: {
    style() {
      return { 'padding-top': this.height };
    },
  },
};
</script>
<style lang="sass">
.ContainerRatio
  +size(100%, 0)
  position: relative
  overflow: hidden
  &__container
    +size(100%, 100%)
    +ab_start
</style>
