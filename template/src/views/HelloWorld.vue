<template >
      <v-layout justify-cente align-center column>
          <v-avatar size="255" tile="tile"><img :src="icon" /></v-avatar>
          <div class="hello__title text-xs-center mb-3">
              <p>Hello</p>
              <p>Gitpage</p>
          </div>
          <div class="hello__hint">try to type some params by url!</div>
          <v-data-table class="hello__paramList my-3 elevation-1" :headers="headers" :items="tableParams" hide-actions="hide-actions"><template v-slot:items="props"><td class="text-xs-center">{{ props.item.parameter }}</td><td class="text-xs-center">{{ props.item.value }}</td></template></v-data-table>
      </v-layout>
</template>

<script>
import icon from "@/assets/gitpage_icon.png";

export default {
  name: "hello",
  data() {
    return {
      icon,
      headers: [
        { text: "parameter", value: "parameter" },
        { text: "value", value: "value" }
      ],
      params: null
    };
  },
  computed: {
    tableParams() {
      const arr = [];
      const p = this.params;

      if (p) {
        Object.keys(p).forEach(k => {
          arr.push({
            parameter: k,
            value: p[k]
          });
        });
      }

      return arr;
    }
  },
  created() {
    this.params = this.$pageUtil.params();
  }
};
</script>

<style lang="sass">
.hello
  &__title
    font-size: 3rem
    font-weight: 900
    letter-spacing: .3rem
    color: var(--v-primary-base)
    p
      margin-bottom: 0
  &__hint
    font-size: 1.5rem
    color: var(--v-secondary-base)
    animation: move 2s infinite ease-in-out
  &__paramList
    font-size: 2rem
    border: 2px solid fade-out($secondary, .7)
    animation: shiny 2s infinite
    th
      background-color: var(--v-info-base)
      vertical-align: middle
    td
      vertical-align: middle

+keyframes(move)
  0%, 20%, 100%
    transform: translateY(0)
  10%
    transform: translateY(-50%)
+keyframes(shiny)
  0%
    border-color: fade-out($secondary, .7)
  15%
    border-color: fade-out($secondary, .7)
  25%
    border-color: #5893d4
  35%
    border-color: fade-out($secondary, .7)
  45%
    border-color: #5893d4
  55%
    border-color: fade-out($secondary, .7)
  65%
    border-color: #5893d4
  75%
    border-color: fade-out($secondary, .7)
  100%
    border-color: fade-out($secondary, .7)
</style>
