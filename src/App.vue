<template lang="">
  <div class="page-body">
    <landingPage />
    <router-view/>
  </div>
</template>
<script>
  import landingPage from './components/landingPage.vue'
export default {
  components:{
    landingPage
  },
  data(){
    return{
      
    }
  }
}
</script>
<style lang="css">
  #app {
  text-align: center;
}
</style>