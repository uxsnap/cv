<template>
  <div class="coin-wrapper">
    <img
      v-for="(coin, ind) in coins"
      :key="`coin_${ind}`"
      src="~/assets/images/coin.svg"
      class="coin"
      @click="coinGrab(ind)"
      :style="coin.pos"
      v-show="coin.toShow"
    />
  </div>
</template>

<script>
import { randomRange } from '~/helpers';

export default {
  props: {
    count: { type: Number, default: 0 }
  },
	data() {
    return {
      coins: [],
      coinsCount: 0,
    }
  },
  mounted() {
    for (let i = 0; i < this.count; i++) {
      this.coins.push({ toShow: false, pos: this.randomPos() });
      setTimeout(() => {
        this.coins[i].toShow = true;
      }, this.coinsInterval * i);
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  computed: {
    coinsInterval: () => 1000,
  },
  methods: {
    randomPos: () => {
      const top = randomRange(20, document.documentElement.offsetHeight - 200);
      const left = randomRange(20, document.documentElement.offsetWidth - 200);
      return {
        top: `${top}px`,
        left: `${left}px`,
      }
    },
    coinGrab(ind) {
      this.coins[ind].toShow = false;
      this.$emit('coin-grab', ind);
    }
  }
}
</script>