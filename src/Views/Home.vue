<template>
  <ul>
    <li v-for="item in banners" :key="item.id">
      <img :src="item.midImg" alt="">
      <h2>{{ item.title }}</h2>
      <h2>{{ item.description }}</h2>
    </li>
  </ul>
</template>

<script>
import { getBanners } from '@/api/banner';
export default {
  data(){
    return {
      banners:[],
    }
    
  },
  async created(){
    this.banners =await getBanners()
  }
};
</script>

<style scoped>
.home-container {
  background: lightblue;
  width: 300px;
  height: 500px;
  border: 1px solid;
  margin: 50px auto;
}
</style>