<template>
  <div id="app">
    <div class="test-container">
      <Contact />
    </div>
  </div>
</template>

<script>
import Contact from './components/Contact'
export default {
  name: 'App',
  components: {
    Contact,
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
