<template>
  <div class="home-container" ref="container">
    <ul
      class="carousel-container"
      :style="{marginTop}"
    >
      <li v-for="item in banners" :key="item.id">
        <Carouselitem />
      </li>
    </ul>
    <div v-show="index >= 1" @click="switchTo(index - 1)" class="icon icon-up">
      <Icon type="arrowup" />
    </div>
    <div
      v-show="index < banners.length - 1"
      @click="switchTo(index + 1)"
      class="icon icon-down"
    >
      <Icon type="arrowdown" />
    </div>
    <ul class="indicator">
      <li
        :class="{
          active: i === index,
        }"
        v-for="(item, i) in banners"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>
<script>
import { getBanners } from "@/api/banner";
import Carouselitem from "./Carouselitem";
import Icon from "@/components/Icon";
export default {
  components: {
    Carouselitem,
    Icon,
  },
  data() {
    return {
      banners: [],
      index: 2, // 当前显示的是第几张轮播图
      containerHeight: 0, // 整个容器的高度
    };
  },
  async created() {
    this.banners = await getBanners();
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    // 切换轮播图
    switchTo(i) {
      this.index = i;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/style/mixin.less";
@import "~@/style/var.less";

.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  
  li {
    width: 100%;
    height: 100%;
  }
}

.indicator {

  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  list-style: none;

  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #333;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    transition: 0.5s;

    &.active {
      background: #fff;
    }
  }
}

.icon {
  .self-center();
  font-size: 35px;
  color: @gray;
  font-weight: 900;
  transform: translateX(-50%);

  &.icon-up {
    top: 25px;
    animation: jump-up 2s infinite;
  }

  &.icon-down {
    top: auto;
    bottom: 25px;
    animation: jump-down 2s infinite;
  }

  @keyframes jump-up {
    0% {
      transform: translate(-50%, 10px);
    }

    50% {
      transform: translate(-50%, -10px);
    }

    100% {
      transform: translate(-50%, 10px);
    }
  }

  @keyframes jump-down {
    0% {
      transform: translate(-50%, -10px);
    }

    50% {
      transform: translate(-50%, 10px);
    }

    100% {
      transform: translate(-50%, -10px);
    }
  }
}</style>