<template>
  <ul class="langs-switch">
    <li
      :class="{ active: curLang === lang }"
      class="langs-switch__lang"
      v-for="(lang, ind) in langs"
      :key="`lang_${ind}`"
      @click="$emit('switch', lang)"
    >
      <img :src="require(`~/assets/images/${lang}.png`)" :alt="lang" />
      <span>{{ lang.toUpperCase() }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    curLang: { type: String, default: "en" },
  },
  computed: {
    langs() {
      return ["ru", "en"];
    },
  },
};
</script>
