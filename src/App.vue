<template>
  <div id="app">
    <div class="test-container">
        <SiteAside/>
    </div>
  </div>
</template>

<script>
import SiteAside from './components/SiteAside'
export default {
  name: 'App',
  components: {
    SiteAside,
  },

}
</script>

<style scoped>
.test-container{
  
  width: 300px;
  height: 600px;
  border: 2px solid red ;
  margin: 0 auto;

}
</style>
