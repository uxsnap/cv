<template>
	<div id="vending" class="vending" ref="vending">
   <img ref="vendingImage" class="vending__image" src="~/assets/images/vending.svg">
   <div ref="vendingContainer" class="vending__container"></div>
   <div class="vending__glass"></div>
   <div class="vending__coins">
    <img src="~/assets/images/coin.svg" alt="coin">
    <span>{{ coinCount }} coins</span>
  </div>
  <div @click="getItemFromVending" class="vending__lever" :class="{active: isActive, disabled: isDisabled}">
    <div class="vending__lever-circle"></div>
    <div class="vending__lever-stick"></div>
  </div>
  </div>
</template>


<script>
import {
  Engine,
  World,
  Render,
  Composite,
  Rectangle,
  Runner,
  Bodies,
} from 'matter-js';

import { wall, rect, svg, createWalls, get, randomRange } from '~/helpers';
import { mainBg } from '~/constants';

export default {
  props: {
    balls: { type: Array, default: () => [] },
    coinCount: { type: Number, default: 0 },
    lastDeleted: { type: Number, default: -1 },
  },
  data() {
    return {
      walls: [],
      dataBalls: [],
      isActive: false,
      isDisabled: false,
      world: null,
    }
  },
  methods: {
    init() {
      const engine = Engine.create();
      this.world = engine.world;

      const container = this.$refs.vendingContainer;
      const containerCoords = container.getBoundingClientRect();

      // create renderer
      const render = Render.create({
        element: container,
        engine: engine,
        options: {
          width: containerCoords.width,
          height: containerCoords.height,
          wireframes: false,
          background: mainBg,
          showAngleIndicator: false
        }
      });

      Render.run(render);

      const runner = Runner.create();
      Runner.run(runner, engine);
    },
    resizeWalls() {
      this.walls = createWalls(
        this.$refs.vendingContainer
      );

      World.add(this.world, [
        ...this.walls
      ]);
    },
    addBalls(propBalls) {
      this.dataBalls = [];
      for (let i = 0; i < propBalls.length; i++) {
        this.dataBalls.push(
          Bodies.rectangle(
            randomRange(50, 200),
            randomRange(10, 200),
            30,
            30,
            {
              render: {
                sprite: {
                  texture: propBalls[i].icon,
                  xScale: .3,
                  yScale: .3
                },
            }})
        )
      }
    },
    getItemFromVending() {
      if (this.coinCount === 0 || !this.dataBalls.length) return;
      this.isActive = true;
      setTimeout(() => { this.isActive = false }, 500);
      this.$emit('get-item')
    },
    recreateWorld() {
      World.clear(this.world);
      this.addBalls(this.balls);
      World.add(this.world, [...this.dataBalls]);
    }
  },
  watch: {
    balls() {
      if (this.balls.length === 0) this.isDisabled = true;
    },
    lastDeleted(newVal, oldVal) {
      if (newVal === oldVal) return;
      World.remove(this.world, this.dataBalls.find((item) => item.id === newVal));

    }
  },
  mounted() {
    // Background color
    this.init();

    this.recreateWorld();
    // Adding walls 
    this.resizeWalls();

    // Listeners needed
    window.addEventListener('resize', this.resizeWalls);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeWalls);
  },
}
</script>