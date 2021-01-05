<template>
	<div class="list__wrapper">
		<!-- <div class="list"> -->
	    <div v-for="(item, ind) in items" class="list__item" :key="'list-item_' + ind">
	      <ListItem :item="item" :is-small="isSmall"/>
	    </div>
	  <!-- </div> -->
	</div>
</template>

<script>
import ListItem from './ListItem';

export default {
	components: { ListItem },
  props: { 
  	items: { type: Array, default: () => [] },
  	isSmall: { type: Boolean, default: false }
  }
}
</script>