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
  
  width: 400px;
  
  border: 2px solid red ;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 200px;
  background: #000;
}
</style>
