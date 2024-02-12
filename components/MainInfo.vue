<template>
  <div class="main-info">
    <div class="main-info__my-info">
      <div class="main-info__photo"><img :src="photo" alt="MyPhoto" /></div>
      <div class="main-info__me">
        <p v-for="(i, ind) in info" :key="'main-info__me_' + ind">
          {{ i }}
        </p>
        <div class="side-info side-info_inner">
          <LangsSwitch @switch="$emit('switch', $event)" :cur-lang="curLang" />
          <div class="modal-link modal-link_inner" @click="$emit('open')">
            {{ link }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LangsSwitch from "~/components/LangsSwitch";

export default {
  components: { LangsSwitch },
  props: {
    curLang: { type: String, default: "ru" },
    photo: { type: String, default: "" },
    items: { type: Array, default: () => [] },
  },
  computed: {
    link() {
      return this.$t("link");
    },
    info() {
      return this.$t("info");
    },
  },
};
</script>
