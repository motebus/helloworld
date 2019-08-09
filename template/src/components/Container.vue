<template lang="pug">
.Container(@mousedown="mousedown") {{ dragging }}
</template>
<script>
export default {
  name: 'Container',
  data() {
    return {
      dragging: false,
    };
  },
  methods: {
    mousedown() {
      console.log('d');
      this.dragging = true;
    },
    mouseup() {
      console.log('u');
      this.dragging = false;
    },
  },
  created() {
    document.addEventListener('mouseup', this.mouseup);
  },
  beforeDestroy() {
    document.removeEventListener('mouseup', this.mouseup);
  },
};
</script>
<style lang="sass">
.Container
  border: 1px solid red
  resize: both
  overflow: auto
</style>
