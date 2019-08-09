<template lang="pug">
.Loader(:style="style")
  svg(
    viewBox="0 0 32 32"
    width="32"
    height="32")
    circle.Loader__spinner(
      cx="16"
      cy="16"
      r="14"
      fill="none")
</template>

<script>
export default {
  name: 'Loading',
  props: {
    position: {
      type: String,
      validator: v => ['fixed', 'relative'].indexOf(v) !== -1,
      default: 'fixed',
    },
  },
  computed: {
    style() {
      let o;

      switch (this.position) {
        case 'fixed':
          o = Object.assign({}, {
            position: 'fixed',
            left: '50%',
            top: '50%',
          });
          break;

        case 'relative':
          o = Object.assign({}, {
            position: 'relative',
            width: '100%',
            height: '100%',
          });
          break;

        default:
          o = Object.assign({}, {
            position: 'fixed',
            left: '50%',
            top: '50%',
          });
      }

      return o;
    },
  },
};
</script>

<style lang="sass">
.Loader
  +flex
  &__spinner
    +animate_loader
    box-sizing: border-box
    stroke: #f7b633
    stroke-width: 3px
    transform-origin: 50%


</style>
