<template>
  <main class="main-wrapper">
    <Coins :count="allCoins" @coin-grab="() => coinCount++" />
    <LinksModal v-bind="myInfo" :show="isActive" @close="isActive = false" />
    <div class="containersWrapper">
      <div class="left">
        <MainInfo
          v-bind="mainInfo"
          @open="isActive = true"
          @switch="switchLang"
          :cur-lang="curLang"
        />
        <List v-bind="listProps" :is-small="isSmall" />
      </div>
      <div class="right">
        <VendingMachine v-bind="vendingProps" @get-item="getItem" />
      </div>
    </div>
    <div class="side-info">
      <LangsSwitch @switch="switchLang" :cur-lang="curLang" />
      <div class="modal-link" @click="isActive = true">{{ link }}</div>
    </div>
  </main>
</template>

<script>
import MainInfo from "~/components/MainInfo";
import Coins from "~/components/Coins";
import List from "~/components/List";
import VendingMachine from "~/components/VendingMachine";
import LinksModal from "~/components/LinksModal";
import LangsSwitch from "~/components/LangsSwitch";

import mainInfo from "~/assets/helpers/mainInfo";
import sideInfo from "~/assets/helpers/sideInfo";
import myInfo from "~/assets/helpers/myInfo";

export default {
  components: {
    MainInfo,
    Coins,
    LinksModal,
    List,
    VendingMachine,
    LangsSwitch,
  },
  data() {
    return {
      mainInfo,
      sideInfo,
      coinCount: 0,
      lastDeletedId: -1,
      isActive: false,
      isSmall: false,
      curLang: "ru",
    };
  },
  mounted() {
    this.checkWidth();
    window.addEventListener("resize", this.checkWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkWidth);
  },
  computed: {
    link() {
      return this.$t("link");
    },
    allCoins: () => sideInfo.listInfo.length,
    listProps() {
      return { items: sideInfo.listInfo };
    },
    vendingProps() {
      return {
        balls: [...sideInfo.vendingInfo],
        coinCount: this.coinCount,
        lastDeleted: this.lastDeletedId,
      };
    },
    myInfo() {
      return myInfo;
    },
  },
  methods: {
    switchLang($event) {
      this.curLang = $event;
      this.$i18n.locale = $event;
    },
    checkWidth() {
      this.isSmall = document.documentElement.offsetWidth <= 900;
    },
    getItem() {
      const getRandomItem = Math.floor(
        Math.random() * this.sideInfo.vendingInfo.length
      );
      const { id } = this.sideInfo.vendingInfo.splice(getRandomItem, 1)[0];
      const curItemIndex = this.sideInfo.listInfo.findIndex(
        (item) => item.id === id
      );
      const curItem = this.sideInfo.listInfo[curItemIndex];
      curItem.isUnlocked = true;
      this.$set(this.sideInfo.listInfo, curItemIndex, curItem);
      this.lastDeletedId = id;
      --this.coinCount;
    },
  },
};
</script>
