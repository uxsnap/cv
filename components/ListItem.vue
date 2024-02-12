<template>
  <div class="list-item" :class="{ locked: !isUnlocked }">
    <div class="list-item__icon">
      <img v-if="isUnlocked" :src="item.icon" alt="" />
      <img
        v-else
        :src="require('~/assets/images/lock.svg')"
        alt="lock"
        class="list-item__lock"
      />
    </div>
    <div class="list-item__main">
      <div class="list-item__title">{{ isUnlocked ? item.title : locked }}</div>
      <div class="list-item__desc">
        {{ isUnlocked ? itemDesc(item.desc) : locked }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, default: () => null },
    isSmall: { type: Boolean, default: false },
  },
  computed: {
    isUnlocked() {
      return this.item.isUnlocked || this.isSmall;
    },
    locked() {
      return this.$t("locked");
    },
  },
  methods: {
    itemDesc(desc) {
      return this.$t(desc);
    },
  },
};
</script>
