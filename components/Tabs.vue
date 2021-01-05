<template>
<div class="tabs">
  <div class="tabs__tabs">
  	<div 
        @click="$emit('tab', tab.id)"
        v-for="(tab, ind) in tabs"
        class="tab"
        :key="'tab_' + ind"
        :class="{ active: currentTab === tab.id }">
  		<div
        class="tab__title" 
      >{{ tab.title }}</div>
      <div class="tab__hidden">{{ tab.title }}</div>
  	</div>
  </div>
	<div class="tabs__component">
		<slot></slot>
	</div>
</div>
</template>

<script>
export default {
  props: {
    tabs: { type: Array, default: () => []},
    currentTab: { type: Number, default: -1},
  },
}	
</script>