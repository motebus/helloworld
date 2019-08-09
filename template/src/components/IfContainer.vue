<template lang="pug">
.IfContainer
  .IfContainer__form(v-if="!show")
    input.IfContainer__input(v-model="value")
    button.IfContainer__submit(@click="submit") 送出
  .IfContainer__content(v-else)
    iframe.IfContainer__iframe(:src="value")
</template>

<script>
export default {
  name: 'IfContainer',
  data() {
    return {
      value: '',
      show: false,
    };
  },
  methods: {
    submit() {
      this.show = true;
    },
  },
};
</script>

<style lang="sass">
.IfContainer
  +size(100%, 100%)
  &__form
    +size(100%, 100%)
    +flex
  &__content
    +size(100%, 100%)
  &__iframe
    +size(100%, 100%)
</style>
