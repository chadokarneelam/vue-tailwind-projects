<template lang="">
  <div class="c-box">
    <div class="semi1 bg-[#DEE2E7] w-48 h-40 ml-auto"></div>
    <div class="p-list z-10">
      <div v-for="i in 3" :key="i" class="pic-2">
      <span class="flex justify-center "><img class="pic mb-2 h-pic" src="./../assets/home.png" alt=""></span>
      <div class="flex flex-wrap justify-evenly bg-white">
        <span v-for="i in 5" :key="i" class=" w-16 h-pic"><img class="shadow-xl" src="./../assets/home.png" alt=""></span>
      </div>
    </div>
    </div>
    <div class="semi2 bg-[#DEE2E7] w-48 h-40 mr-auto z-1"></div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="css" scoped>
  .semi1{
    clip-path: circle(50% at 50% 100%);
  }
  .semi2{
    clip-path: circle(50% at 50% 0);
  }
</style>