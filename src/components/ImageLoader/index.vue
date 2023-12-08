<template>
  <div class="imageloader-container">
    <img v-if="!everthingDone" class="placeholder" :src="placeholder">
    <img @load="handleLoad" class="original" :src="src" :style="{
      opacity:originopacity,transform:`${duration}ms`
    }">
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      originLoaded: false,
      everthingDone: false,
    }
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 3000,
    }
  },
  computed: {
    originopacity() {
      return this.originLoaded ? 1 : 0;
    }
  },
  methods: {
    handleLoad() {
      this.originLoaded = true;
      setTimeout(()=>{
        this.everthingDone=true
      },this.duration)
      this.$emit("load");
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";

.imageloader-container {
  width: 100%;
  height: 100%;

  img {
    .self-fill();
    object-fit: cover;
   
  }
  .placeholder{
    filter: blur(2vm);
    
  }
}
</style>