<template>
  <div class="links" v-show="show">
    <div class="links__modal">
      <h1>{{ myLinks }} :</h1>
      <ul class="links__list">
        <li v-for="(item, ind) in items" :key="`info_${ind}`">
          <img :src="item.icon" alt="icon" />
          <a :href="item.link">{{ item.label }}</a>
        </li>
      </ul>
    </div>
    <div class="links__close" @click="$emit('close')">
      <img src="~/assets/images/close.svg" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Array, default: () => [] },
    show: { type: Boolean, default: false },
  },
  computed: {
    myLinks() {
      return this.$t("myLinks");
    },
  },
};
</script>
